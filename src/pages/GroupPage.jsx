import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import TopNav from '../components/TopNav';
import { useAuth } from '../context/AuthContext';

function formatDate(value) {
  if (!value) return '—';

  try {
    if (typeof value?.toDate === 'function') {
      return value.toDate().toLocaleDateString();
    }

    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return '—';
    return parsed.toLocaleDateString();
  } catch {
    return '—';
  }
}

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

function sortByNewest(items, key) {
  return [...items].sort((a, b) => {
    const aValue =
      typeof a?.[key]?.toDate === 'function'
        ? a[key].toDate().getTime()
        : new Date(a?.[key] ?? 0).getTime();

    const bValue =
      typeof b?.[key]?.toDate === 'function'
        ? b[key].toDate().getTime()
        : new Date(b?.[key] ?? 0).getTime();

    return (Number.isNaN(bValue) ? 0 : bValue) - (Number.isNaN(aValue) ? 0 : aValue);
  });
}

function GroupStatCard({ label, value, sublabel }) {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {sublabel ? <div className="subtle" style={{ marginTop: '6px' }}>{sublabel}</div> : null}
    </div>
  );
}

function getSharedDraftTitle(draft) {
  if (draft.title?.trim()) return draft.title;
  if (draft.selectedTeam === 'ALL') return 'Full Mock Draft';
  if (Array.isArray(draft.selectedTeams) && draft.selectedTeams.length > 1) {
    return `${draft.selectedTeams.length}-Team Mock Draft`;
  }
  if (draft.selectedTeam && draft.selectedTeam !== 'MULTI') {
    return `${draft.selectedTeam} Mock Draft`;
  }
  return 'Untitled Draft';
}

function getSharedDraftTeamLabel(draft) {
  if (draft.selectedTeam === 'ALL') return 'All 32 Teams';

  if (Array.isArray(draft.selectedTeams) && draft.selectedTeams.length > 1) {
    return `${draft.selectedTeams.length} Teams`;
  }

  if (draft.selectedTeam && draft.selectedTeam !== 'MULTI') {
    return draft.selectedTeam;
  }

  return '—';
}

export default function GroupPage() {
  const { groupId } = useParams();
  const { user, profile } = useAuth();

  const [group, setGroup] = useState(null);
  const [groupDrafts, setGroupDrafts] = useState([]);
  const [memberProfiles, setMemberProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState('');
  const [draftsError, setDraftsError] = useState('');
  const [actionError, setActionError] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');
  const [removingDraftId, setRemovingDraftId] = useState('');

  useEffect(() => {
    async function loadGroupPage() {
      if (!groupId || !user?.uid) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setPageError('');
      setDraftsError('');
      setActionError('');
      setActionSuccess('');
      setGroup(null);
      setGroupDrafts([]);
      setMemberProfiles([]);

      try {
        const groupRef = doc(db, 'groups', groupId);
        const groupSnap = await getDoc(groupRef);

        if (!groupSnap.exists()) {
          throw new Error('Group not found.');
        }

        const groupData = { id: groupSnap.id, ...groupSnap.data() };
        setGroup(groupData);

        const memberUids = Array.isArray(groupData.memberUids) ? groupData.memberUids : [];

        try {
          const sharedDraftsSnap = await getDocs(
            query(collection(db, 'groups', groupId, 'sharedMocks'))
          );

          const sharedDraftRows = sharedDraftsSnap.docs.map((item) => ({
            id: item.id,
            ...item.data(),
          }));

          setGroupDrafts(sortByNewest(sharedDraftRows, 'updatedAt'));
        } catch (error) {
          console.error('[group-page] shared drafts read failed', error);
          setDraftsError(error?.message || 'Could not load shared drafts.');
          setGroupDrafts([]);
        }

        if (memberUids.length > 0) {
          try {
            const memberDocs = await Promise.all(
              memberUids.map(async (uid) => {
                const userSnap = await getDoc(doc(db, 'users', uid));
                if (!userSnap.exists()) {
                  return {
                    id: uid,
                    username: 'User',
                    favoriteTeam: '',
                    bio: '',
                  };
                }

                return {
                  id: userSnap.id,
                  ...userSnap.data(),
                };
              })
            );

            setMemberProfiles(memberDocs);
          } catch (error) {
            console.error('[group-page] member profiles read failed', error);
            setMemberProfiles([]);
          }
        } else {
          setMemberProfiles([]);
        }
      } catch (error) {
        console.error('[group-page] failed to load group', error);
        setPageError(error?.message || 'Failed to load group.');
        setGroup(null);
      } finally {
        setLoading(false);
      }
    }

    loadGroupPage();
  }, [groupId, user]);

  const isOwner = useMemo(() => {
    return !!group && group.ownerUid === user?.uid;
  }, [group, user]);

  const currentUsername = useMemo(() => {
    return (
      profile?.username ||
      user?.displayName ||
      user?.email?.split('@')[0] ||
      'GM'
    );
  }, [profile, user]);

  function canRemoveSharedDraft(draft) {
    if (!user?.uid || !draft || !group) return false;

    return (
      group.ownerUid === user.uid ||
      draft.ownerUid === user.uid ||
      draft.sharedByUid === user.uid
    );
  }

  async function handleRemoveSharedDraft(draft) {
    if (!user?.uid) {
      setActionError('You must be signed in to remove a shared draft.');
      return;
    }

    if (!draft?.id || !groupId) {
      setActionError('No shared draft was selected.');
      return;
    }

    if (!canRemoveSharedDraft(draft)) {
      setActionError('You do not have permission to remove this shared draft.');
      return;
    }

    const confirmed = window.confirm(
      `Remove ${getSharedDraftTitle(draft)} from this group? The owner’s private draft will not be deleted.`
    );

    if (!confirmed) return;

    setRemovingDraftId(draft.id);
    setActionError('');
    setActionSuccess('');

    try {
      await deleteDoc(doc(db, 'groups', groupId, 'sharedMocks', draft.id));

      setGroupDrafts((currentDrafts) =>
        currentDrafts.filter((item) => item.id !== draft.id)
      );

      setActionSuccess(`${getSharedDraftTitle(draft)} was removed from the group.`);
    } catch (error) {
      console.error('[group-page] remove shared draft failed', error);
      setActionError(error?.message || 'Could not remove shared draft.');
    } finally {
      setRemovingDraftId('');
    }
  }

  if (loading) {
    return (
      <div className="app-shell">
        <div className="page">
          <TopNav />
          <div className="loading-screen">Loading group...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="page">
        <div className="panel">
          <h2>Group</h2>
          <p className="subtle">You need to sign in to view groups.</p>
          <div className="inline-row" style={{ marginTop: '12px' }}>
            <Link to="/login" className="primary-btn">
              Go to Login
            </Link>
            <Link to="/" className="ghost-btn">
              Back Home
            </Link>
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
            <h2>Group</h2>
            <p className="error-text">{pageError}</p>
            <div className="inline-row" style={{ marginTop: '12px' }}>
              <Link to="/profile" className="ghost-btn">
                Back to Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="page">
        <TopNav />

        {actionError ? (
          <div className="panel" style={{ marginBottom: '18px' }}>
            <p className="error-text">{actionError}</p>
          </div>
        ) : null}

        {actionSuccess ? (
          <div className="panel" style={{ marginBottom: '18px' }}>
            <p className="success-text">{actionSuccess}</p>
          </div>
        ) : null}

        <div className="top-nav" style={{ marginBottom: '18px' }}>
          <div className="brand-block">
            <div className="brand-title">{group?.name || 'Group'}</div>
            <div className="brand-subtitle">
              {group?.description?.trim()
                ? group.description
                : 'Group hub for shared mock drafts.'}
            </div>
          </div>

          <div className="nav-actions">
            <Link to="/profile" className="ghost-btn">
              Back to Profile
            </Link>
          </div>
        </div>

        <div className="home-grid">
          <div className="hero-panel">
            <div className="panel">
              <div className="selector-header">
                <div>
                  <h1 style={{ marginBottom: '6px' }}>{group?.name || 'Group'}</h1>
                  <div className="subtle">Created {formatDate(group?.createdAt)}</div>
                </div>

                <div className="inline-row">
                  <span className="team-pill">Code: {group?.inviteCode || '—'}</span>
                  {isOwner ? <span className="badge">Owner</span> : null}
                </div>
              </div>

              <div className="quick-stats">
                <GroupStatCard
                  label="Members"
                  value={group?.memberCount ?? group?.memberUids?.length ?? 0}
                  sublabel="Users in this group"
                />
                <GroupStatCard
                  label="Shared Drafts"
                  value={groupDrafts.length}
                  sublabel="Drafts shared to this group"
                />
                <GroupStatCard
                  label="Owner"
                  value={group?.ownerUsername || '—'}
                  sublabel="Group creator"
                />
                <GroupStatCard
                  label="Viewing As"
                  value={currentUsername}
                  sublabel="Current signed-in profile"
                />
              </div>
            </div>

            <div className="panel" style={{ marginTop: '18px' }}>
              <div className="selector-header">
                <div>
                  <h3 className="selector-title">Shared Drafts</h3>
                  <div className="subtle">
                    Group-visible draft snapshots appear here.
                  </div>
                </div>
              </div>

              {draftsError ? (
                <div className="empty-state">{draftsError}</div>
              ) : groupDrafts.length === 0 ? (
                <div className="empty-state">
                  No drafts have been shared to this group yet.
                </div>
              ) : (
                <div className="player-list">
                  {groupDrafts.map((draft) => (
                    <div key={draft.id} className="player-card">
                      <div className="pick-header">
                        <div style={{ display: 'grid', gap: '6px' }}>
                          <h4>{getSharedDraftTitle(draft)}</h4>
                          <div className="subtle">
                            By {draft.ownerUsername || 'Unknown GM'}
                          </div>
                        </div>

                        <div className="inline-row">
                          <span className="badge">{draft.status || 'Saved'}</span>
                          <span className="team-pill">
                            {getSharedDraftTeamLabel(draft)}
                          </span>
                        </div>
                      </div>

                      <div className="inline-row" style={{ marginTop: '12px' }}>
                        <span className="badge">
                          Updated: {formatDateTime(draft.updatedAt || draft.createdAt)}
                        </span>
                        <span className="badge">Rounds: {draft.rounds || 7}</span>
                      </div>

                      <div className="subtle" style={{ marginTop: '12px' }}>
                        Picks made: {Array.isArray(draft.picks) ? draft.picks.length : draft.pickCount ?? 0}
                      </div>

                      <div className="player-actions">
                        <div className="inline-row">
                          <Link
                            to={`/groups/${groupId}/drafts/${draft.id}`}
                            className="selector-action"
                          >
                            View Draft
                          </Link>

                          {canRemoveSharedDraft(draft) ? (
                            <button
                              type="button"
                              className="selector-action"
                              onClick={() => handleRemoveSharedDraft(draft)}
                              disabled={removingDraftId === draft.id}
                            >
                              {removingDraftId === draft.id ? 'Removing...' : 'Remove from Group'}
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="side-panel">
            <div className="panel">
              <div className="selector-header">
                <div>
                  <h3 className="selector-title">Members</h3>
                  <div className="subtle">People currently in this group.</div>
                </div>
              </div>

              {memberProfiles.length === 0 ? (
                <div className="empty-state">No members found.</div>
              ) : (
                <div className="player-list">
                  {memberProfiles.map((member) => (
                    <div key={member.id} className="player-card">
                      <div className="pick-header">
                        <div style={{ display: 'grid', gap: '6px' }}>
                          <h4>{member.username || 'User'}</h4>
                          <div className="subtle">
                            {member.favoriteTeam?.trim()
                              ? `Favorite Team: ${member.favoriteTeam}`
                              : 'No favorite team set'}
                          </div>
                        </div>

                        <div className="inline-row">
                          {group?.ownerUid === member.id ? (
                            <span className="badge">Owner</span>
                          ) : (
                            <span className="team-pill">Member</span>
                          )}
                        </div>
                      </div>

                      <div className="subtle" style={{ marginTop: '12px' }}>
                        {member.bio?.trim() ? member.bio : 'No bio added yet.'}
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