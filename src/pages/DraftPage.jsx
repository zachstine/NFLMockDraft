import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TopNav from '../components/TopNav';
import DraftBoard from '../components/DraftBoard';
import PlayerList from '../components/PlayerList';
import { buildDraftBoard } from '../data/draftOrder';
import {
  getPlayersForYear,
  listenToMockDraft,
  makeDraftPick,
} from '../services/draftService';
import { draftCapital2026 } from '../data/draftCapital2026';
import { NFL_TEAMS } from '../data/teams';

const POSITION_ORDER = [
  'ALL',
  'QB',
  'RB',
  'WR',
  'TE',
  'OT',
  'OG',
  'C',
  'EDGE',
  'DT',
  'LB',
  'CB',
  'S',
  'K',
  'P',
];

function getUpcomingPicks(teamAbbr, currentOverallPick) {
  const allPicks = draftCapital2026[teamAbbr] || [];
  return allPicks.filter((pickNumber) => pickNumber >= currentOverallPick);
}

export default function DraftPage() {
  const { mockId } = useParams();
  const navigate = useNavigate();

  const [mockDraft, setMockDraft] = useState(null);
  const [players, setPlayers] = useState([]);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const [positionFilter, setPositionFilter] = useState('ALL');
  const [search, setSearch] = useState('');
  const [savingPick, setSavingPick] = useState(false);
  const [autoPicking, setAutoPicking] = useState(false);
  const [error, setError] = useState('');
  const [selectedRound, setSelectedRound] = useState('ALL');

  useEffect(() => {
    const unsubscribe = listenToMockDraft(mockId, (nextMock) => {
      if (!nextMock) {
        navigate('/');
        return;
      }
      setMockDraft(nextMock);
    });

    return unsubscribe;
  }, [mockId, navigate]);

  useEffect(() => {
    let cancelled = false;

    async function loadPlayers() {
      setLoadingPlayers(true);
      try {
        const loadedPlayers = await getPlayersForYear('2026');
        if (!cancelled) {
          setPlayers(loadedPlayers);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError.message || 'Failed to load players.');
        }
      } finally {
        if (!cancelled) {
          setLoadingPlayers(false);
        }
      }
    }

    loadPlayers();

    return () => {
      cancelled = true;
    };
  }, []);

  const board = useMemo(() => {
    if (!mockDraft) return [];
    return buildDraftBoard(mockDraft.rounds);
  }, [mockDraft]);

  const draftedPlayerIds = useMemo(
    () => new Set((mockDraft?.picks ?? []).map((pick) => pick.playerId)),
    [mockDraft]
  );

  const availablePlayers = useMemo(() => {
    const lowerSearch = search.trim().toLowerCase();

    return players
      .filter((player) => !draftedPlayerIds.has(player.id))
      .filter((player) => positionFilter === 'ALL' || player.position === positionFilter)
      .filter((player) => {
        if (!lowerSearch) return true;
        return (
          player.fullName.toLowerCase().includes(lowerSearch) ||
          player.school.toLowerCase().includes(lowerSearch) ||
          player.position.toLowerCase().includes(lowerSearch)
        );
      })
      .sort((a, b) => a.overallRank - b.overallRank);
  }, [players, draftedPlayerIds, positionFilter, search]);

  const currentSlot = board[mockDraft?.currentPickIndex ?? 0] ?? null;

  const canUserPick = useMemo(() => {
    if (!mockDraft || !currentSlot) return false;
    return mockDraft.selectedTeam === 'ALL' || mockDraft.selectedTeam === currentSlot.team;
  }, [mockDraft, currentSlot]);

  async function handlePick(player, { isAuto = false } = {}) {
    if (!mockDraft || !currentSlot) return;

    setSavingPick(true);
    setError('');

    try {
      await makeDraftPick(mockId, currentSlot, player, isAuto);
    } catch (pickError) {
      setError(pickError.message || 'Could not save pick.');
    } finally {
      setSavingPick(false);
    }
  }

  useEffect(() => {
    if (!mockDraft || !currentSlot) return;
    if (mockDraft.selectedTeam === 'ALL') return;
    if (currentSlot.team === mockDraft.selectedTeam) return;
    if (savingPick || autoPicking) return;

    const bestAvailable = players
      .filter((player) => !draftedPlayerIds.has(player.id))
      .sort((a, b) => a.overallRank - b.overallRank)[0];

    if (!bestAvailable) return;

    let ignore = false;

    async function runAutoPick() {
      setAutoPicking(true);
      try {
        if (!ignore) {
          await handlePick(bestAvailable, { isAuto: true });
        }
      } finally {
        if (!ignore) {
          setAutoPicking(false);
        }
      }
    }

    runAutoPick();

    return () => {
      ignore = true;
    };
  }, [mockDraft, currentSlot, players, draftedPlayerIds, savingPick, autoPicking]);

  if (!mockDraft) {
    return <div className="loading-screen">Loading draft...</div>;
  }

  const completedPicks = mockDraft.picks?.length ?? 0;
  const totalPicks = board.length;
  const remainingPicks = Math.max(totalPicks - completedPicks, 0);

  const positionOptions = POSITION_ORDER.filter(
    (position) => position === 'ALL' || players.some((player) => player.position === position)
  );

  const activeTeamAbbr = currentSlot?.team ?? null;
  const activeTeam = NFL_TEAMS.find((team) => team.abbr === activeTeamAbbr) ?? null;

  const upcomingPicks =
    activeTeamAbbr && currentSlot
      ? getUpcomingPicks(activeTeamAbbr, currentSlot.overall)
      : [];

  const nextUpcomingPick = upcomingPicks[0] ?? null;

  return (
    <div className="app-shell">
      <div className="page">
        <TopNav />

        <div className="draft-top-banner panel">
          <div className="draft-top-banner-left">
            <div className="draft-top-banner-title">
              {mockDraft.selectedTeam === 'ALL'
                ? 'User-controlled full draft'
                : `${mockDraft.selectedTeam} user-controlled | CPU BPA for others`}
            </div>
          </div>

          <div className="draft-top-banner-right">
            <span className="badge">Completed: {completedPicks}</span>
            <span className="badge">Remaining: {remainingPicks}</span>
            <span className="badge">Rounds: {mockDraft.rounds}</span>
          </div>
        </div>

        <div className="draft-layout">
          <DraftBoard
            board={board}
            picks={mockDraft.picks ?? []}
            currentOverallPick={currentSlot?.overall ?? null}
            selectedRound={selectedRound}
            onRoundChange={setSelectedRound}
          />

          <div>
            <div className="panel" style={{ marginBottom: '18px' }}>
              <div className="toolbar">
                <div className="toolbar-top">
                  <input
                    className="search-input"
                    placeholder="Search player, school, or position"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                  />
                </div>

                <div className="filter-row">
                  <div className="field" style={{ minWidth: '200px', margin: 0 }}>
                    <label htmlFor="position-filter">Position</label>
                    <select
                      id="position-filter"
                      value={positionFilter}
                      onChange={(event) => setPositionFilter(event.target.value)}
                    >
                      {positionOptions.map((option) => (
                        <option key={option} value={option}>
                          {option === 'ALL' ? 'All positions' : option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="inline-row">
                    {savingPick && <span className="subtle">Saving pick...</span>}
                    {autoPicking && <span className="subtle">Auto-picking for CPU team...</span>}
                  </div>
                </div>

                {error && <div className="error-text">{error}</div>}
              </div>
            </div>

            <PlayerList
              players={availablePlayers}
              currentSlot={currentSlot}
              canUserPick={canUserPick && !savingPick && !autoPicking}
              onPick={handlePick}
              loading={loadingPlayers}
              activeTeam={activeTeam}
              upcomingPicks={upcomingPicks}
              nextUpcomingPick={nextUpcomingPick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}