import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import TopNav from '../components/TopNav';
import DraftBoard from '../components/DraftBoard';
import { db } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';
import { buildDraftBoard } from '../data/draftOrder';
import { draftCapital2026 } from '../data/draftCapital2026';
import { NFL_TEAMS } from '../data/teams';

function formatDateTime(value) {
  if (!value) return '—';

  try {
    if (typeof value?.toDate === 'function') {
      return value.toDate().toLocaleString();
    }

    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return '—';
    return parsed.toLocaleString();
  } catch {
    return '—';
  }
}

function getUpcomingPicks(teamAbbr, currentOverallPick) {
  const allPicks = draftCapital2026[teamAbbr] || [];
  return allPicks.filter((pickNumber) => pickNumber >= currentOverallPick);
}

function getDraftTitle(draft) {
  if (!draft) return 'Shared Draft';

  if (draft.title?.trim()) return draft.title;

  if (Array.isArray(draft.selectedTeams) && draft.selectedTeams.length > 1) {
    return `${draft.selectedTeams.length}-Team Mock Draft`;
  }

  if (draft.selectedTeam === 'ALL') return 'Full Mock Draft';

  if (draft.selectedTeam && draft.selectedTeam !== 'MULTI') {
    return `${draft.selectedTeam} Mock Draft`;
  }

  return 'Shared Draft';
}

function getDraftStatusLabel(draft) {
  if (!draft) return 'Saved';
  if (draft.status === 'completed') return 'Completed';
  if (draft.status === 'in_progress') return 'In Progress';
  if (draft.status === 'active') return 'Active';
  return draft.status || 'Saved';
}

export default function SharedGroupDraftPage() {
  const { groupId, mockId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [sharedDraft, setSharedDraft] = useState(null);
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState('');
  const [selectedRound, setSelectedRound] = useState('ALL');

  useEffect(() => {
    async function loadSharedDraft() {
      if (!user?.uid || !groupId || !mockId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setPageError('');

      try {
        const groupSnap = await getDoc(doc(db, 'groups', groupId));
        if (!groupSnap.exists()) {
          throw new Error('Group not found.');
        }

        const groupData = { id: groupSnap.id, ...groupSnap.data() };
        const memberUids = Array.isArray(groupData.memberUids) ? groupData.memberUids : [];

        if (!memberUids.includes(user.uid)) {
          throw new Error('You do not have access to this shared draft.');
        }

        setGroup(groupData);

        const sharedDraftSnap = await getDoc(
          doc(db, 'groups', groupId, 'sharedMocks', mockId)
        );

        if (!sharedDraftSnap.exists()) {
          throw new Error('Shared draft not found.');
        }

        const nextSharedDraft = {
          id: sharedDraftSnap.id,
          ...sharedDraftSnap.data(),
        };

        if (nextSharedDraft.status === 'completed') {
          navigate(`/groups/${groupId}/drafts/${mockId}/summary`, { replace: true });
          return;
        }

        setSharedDraft(nextSharedDraft);
      } catch (error) {
        console.error('[shared-group-draft] load failed', error);
        setPageError(error?.message || 'Failed to load shared draft.');
        setSharedDraft(null);
      } finally {
        setLoading(false);
      }
    }

    loadSharedDraft();
  }, [groupId, mockId, navigate, user]);

  const board = useMemo(() => {
    if (!sharedDraft) return [];
    return buildDraftBoard(sharedDraft.rounds || 7);
  }, [sharedDraft]);

  const currentSlot = useMemo(() => {
    if (!sharedDraft || !board.length) return null;

    const currentPickIndex =
      typeof sharedDraft.currentPickIndex === 'number'
        ? sharedDraft.currentPickIndex
        : Array.isArray(sharedDraft.picks)
        ? sharedDraft.picks.length
        : 0;

    return board[currentPickIndex] ?? null;
  }, [sharedDraft, board]);

  const activeTeamAbbr = currentSlot?.team ?? null;
  const activeTeam = NFL_TEAMS.find((team) => team.abbr === activeTeamAbbr) ?? null;

  const upcomingPicks =
    activeTeamAbbr && currentSlot
      ? getUpcomingPicks(activeTeamAbbr, currentSlot.overall)
      : [];

  const nextUpcomingPick = upcomingPicks[0] ?? null;

  if (loading) {
    return (
      <div className="app-shell">
        <div className="page">
          <TopNav />
          <div className="loading-screen">Loading shared draft...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="page">
        <div className="panel">
          <h2>Shared Draft</h2>
          <p className="subtle">You need to sign in to view this draft.</p>
          <div className="inline-row" style={{ marginTop: '12px' }}>
            <Link to="/login" className="primary-btn">Go to Login</Link>
            <Link to="/" className="ghost-btn">Back Home</Link>
          </div>
        </div>
      </div>
    );
  }

  if (pageError) {
    return (
      <div className="app-shell">
        <div className="page">
          <TopNav />
          <div className="panel">
            <h2>Shared Draft</h2>
            <p className="error-text">{pageError}</p>
            <div className="inline-row" style={{ marginTop: '12px' }}>
              <Link to={`/groups/${groupId}`} className="ghost-btn">
                Back to Group
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const picks = Array.isArray(sharedDraft?.picks) ? sharedDraft.picks : [];
  const completedPicks = picks.length;
  const totalPicks = board.length;
  const remainingPicks = Math.max(totalPicks - completedPicks, 0);

  return (
    <div className="app-shell">
      <div className="page">
        <TopNav />

        <div className="draft-top-banner panel">
          <div className="draft-top-banner-left">
            <div className="draft-top-banner-title">
              {getDraftTitle(sharedDraft)}
            </div>
            <div className="subtle" style={{ marginTop: '6px' }}>
              Shared by {sharedDraft?.ownerUsername || 'Unknown GM'} to {group?.name || 'Group'}
            </div>
          </div>

          <div className="draft-top-banner-right">
            <span className="badge">Completed: {completedPicks}</span>
            <span className="badge">Remaining: {remainingPicks}</span>
            <span className="badge">Rounds: {sharedDraft?.rounds || 7}</span>
          </div>
        </div>

        <div className="panel" style={{ marginBottom: '18px' }}>
          <div className="selector-header">
            <div>
              <h3 className="selector-title">Shared Draft Snapshot</h3>
              <div className="subtle">
                Updated: {formatDateTime(sharedDraft?.updatedAt || sharedDraft?.sharedAt)}
              </div>
            </div>

            <div className="inline-row">
              <Link to={`/groups/${groupId}`} className="ghost-btn">
                Back to Group
              </Link>
            </div>
          </div>

          <div className="inline-row" style={{ marginTop: '12px', flexWrap: 'wrap' }}>
            <span className="team-pill">
              Team setup:{' '}
              {sharedDraft?.selectedTeam === 'ALL'
                ? 'All 32 Teams'
                : Array.isArray(sharedDraft?.selectedTeams) && sharedDraft.selectedTeams.length > 1
                ? `${sharedDraft.selectedTeams.length} Teams`
                : sharedDraft?.selectedTeam || '—'}
            </span>
            <span className="badge">Status: {getDraftStatusLabel(sharedDraft)}</span>
            <span className="badge">Shared: {formatDateTime(sharedDraft?.sharedAt)}</span>
            {nextUpcomingPick ? (
              <span className="badge">
                Next {activeTeam?.name || activeTeamAbbr} pick: #{nextUpcomingPick}
              </span>
            ) : null}
          </div>
        </div>

        <div className="draft-layout">
          <DraftBoard
            board={board}
            picks={picks}
            currentOverallPick={currentSlot?.overall ?? null}
            selectedRound={selectedRound}
            onRoundChange={setSelectedRound}
          />

          <div>
            <div className="panel">
              <div className="selector-header">
                <div>
                  <h3 className="selector-title">Draft Picks</h3>
                  <div className="subtle">
                    Read-only view of the shared draft board.
                  </div>
                </div>
              </div>

              {picks.length === 0 ? (
                <div className="empty-state">No picks have been made yet.</div>
              ) : (
                <div className="player-list">
                  {picks
                    .slice()
                    .sort((a, b) => (b.overallPick ?? a.overall ?? 0) - (a.overallPick ?? b.overall ?? 0))
                    .map((pick) => (
                      <div
                        key={`${pick.overallPick ?? pick.overall}-${pick.playerId}`}
                        className="player-card"
                      >
                        <div className="pick-header">
                          <div style={{ display: 'grid', gap: '6px' }}>
                            <h4>
                              #{pick.overallPick ?? pick.overall} - {pick.playerName}
                            </h4>
                            <div className="subtle">
                              {pick.position} • {pick.school}
                            </div>
                          </div>

                          <div className="inline-row">
                            <span className="team-pill">{pick.team}</span>
                            <span className="badge">Round {pick.round}</span>
                          </div>
                        </div>

                        <div className="subtle" style={{ marginTop: '12px' }}>
                          Picked at: {formatDateTime(pick.draftedAt)}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}