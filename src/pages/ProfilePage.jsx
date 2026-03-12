import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

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

function getDraftStatusLabel(draft) {
  if (!draft) return 'Unknown';
  if (draft.status === 'completed') return 'Completed';
  if (draft.status === 'in_progress') return 'In Progress';
  return draft.status ?? 'Saved';
}

function getDraftProgressLabel(draft) {
  if (!draft) return '—';

  if (draft.status === 'completed') {
    return 'Finished';
  }

  if (draft.currentOverallPick) {
    return `On pick #${draft.currentOverallPick}`;
  }

  return 'Not started';
}

function ProfileStatCard({ label, value, sublabel }) {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {sublabel ? <div className="subtle" style={{ marginTop: '6px' }}>{sublabel}</div> : null}
    </div>
  );
}

function DraftListCard({ drafts }) {
  return (
    <div className="panel">
      <div className="selector-header">
        <div>
          <h3 className="selector-title">My Drafts</h3>
          <div className="subtle">Your saved mock drafts and completed boards.</div>
        </div>

        <Link to="/" className="selector-action">
          Start New Draft
        </Link>
      </div>

      {drafts.length === 0 ? (
        <div className="empty-state">
          You have no saved drafts yet.
        </div>
      ) : (
        <div className="player-list">
          {drafts.map((draft) => (
            <div key={draft.id} className="player-card">
              <div className="pick-header">
                <div style={{ display: 'grid', gap: '6px' }}>
                  <h4>{draft.title || 'Untitled Draft'}</h4>
                  <div className="subtle">
                    Created {formatDate(draft.createdAt)}
                  </div>
                </div>

                <div className="inline-row">
                  <span className="badge">{getDraftStatusLabel(draft)}</span>
                  <span className="position-pill">{getDraftProgressLabel(draft)}</span>
                </div>
              </div>

              <div className="inline-row" style={{ marginTop: '12px' }}>
                <span className="team-pill">
                  Team: {draft.selectedTeam || '—'}
                </span>
                <span className="badge">
                  Updated: {formatDateTime(draft.updatedAt || draft.createdAt)}
                </span>
                <span className="badge">
                  Rounds: {draft.rounds || 7}
                </span>
              </div>

              <div className="player-actions">
                <div className="inline-row">
                  <Link
                    to={`/draft/${draft.id}`}
                    className="selector-action"
                  >
                    Open Draft
                  </Link>

                  <button type="button" className="selector-action" disabled>
                    Share to Group
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function GroupsListCard({ groups }) {
  return (
    <div className="panel">
      <div className="selector-header">
        <div>
          <h3 className="selector-title">My Groups</h3>
          <div className="subtle">Groups for comparing and sharing mock drafts.</div>
        </div>

        <div className="inline-row">
          <button type="button" className="selector-action" disabled>
            Create Group
          </button>
          <button type="button" className="selector-action" disabled>
            Join Group
          </button>
        </div>
      </div>

      {groups.length === 0 ? (
        <div className="empty-state">
          You are not in any groups yet.
        </div>
      ) : (
        <div className="player-list">
          {groups.map((group) => (
            <div key={group.id} className="player-card">
              <div className="pick-header">
                <div style={{ display: 'grid', gap: '6px' }}>
                  <h4>{group.name || 'Untitled Group'}</h4>
                  <div className="subtle">
                    Created {formatDate(group.createdAt)}
                  </div>
                </div>

                <div className="inline-row">
                  <span className="badge">
                    {group.memberCount ?? group.memberUids?.length ?? 0} Members
                  </span>
                  {group.inviteCode ? (
                    <span className="team-pill">Code: {group.inviteCode}</span>
                  ) : null}
                </div>
              </div>

              <div className="subtle" style={{ marginTop: '12px' }}>
                {group.description?.trim()
                  ? group.description
                  : 'No description yet.'}
              </div>

              <div className="player-actions">
                <div className="inline-row">
                  <button type="button" className="selector-action" disabled>
                    Open Group
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProfilePage() {
  const [authUser, setAuthUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [drafts, setDrafts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!isMounted) return;

      if (!user) {
        setAuthUser(null);
        setProfile(null);
        setDrafts([]);
        setGroups([]);
        setLoading(false);
        return;
      }

      setAuthUser(user);
      setLoading(true);
      setPageError('');

      try {
        const userRef = doc(db, 'users', user.uid);
        const draftsRef = collection(db, 'drafts');
        const groupsRef = collection(db, 'groups');

        const [userSnap, draftsSnap, groupsSnap] = await Promise.all([
          getDoc(userRef),
          getDocs(query(draftsRef, where('ownerUid', '==', user.uid))),
          getDocs(query(groupsRef, where('memberUids', 'array-contains', user.uid))),
        ]);

        if (!isMounted) return;

        const userData = userSnap.exists()
          ? { id: userSnap.id, ...userSnap.data() }
          : null;

        const draftRows = draftsSnap.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        const groupRows = groupsSnap.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        setProfile(userData);
        setDrafts(sortByNewest(draftRows, 'updatedAt'));
        setGroups(sortByNewest(groupRows, 'createdAt'));
      } catch (error) {
        console.error('[profile-page] failed to load profile data', error);
        if (isMounted) {
          setPageError('Failed to load profile data.');
          setProfile(null);
          setDrafts([]);
          setGroups([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const displayUsername = useMemo(() => {
    return (
      profile?.username ||
      authUser?.displayName ||
      authUser?.email?.split('@')[0] ||
      'User'
    );
  }, [profile, authUser]);

  const memberSince = useMemo(() => {
    return formatDate(profile?.createdAt);
  }, [profile]);

  if (loading) {
    return (
      <div className="page">
        <div className="loading-screen">Loading profile...</div>
      </div>
    );
  }

  if (!authUser) {
    return (
      <div className="page">
        <div className="panel">
          <h2>Profile</h2>
          <p className="subtle">You need to sign in to view your profile.</p>
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

  return (
    <div className="page">
      <div className="top-nav">
        <div className="brand-block">
          <div className="brand-title">Profile</div>
          <div className="brand-subtitle">
            Manage your mock drafts, groups, and account details.
          </div>
        </div>

        <div className="nav-actions">
          <Link to="/" className="ghost-btn">
            Home
          </Link>
        </div>
      </div>

      {pageError ? (
        <div className="panel" style={{ marginBottom: '18px' }}>
          <p className="error-text">{pageError}</p>
        </div>
      ) : null}

      <div className="home-grid">
        <div className="hero-panel">
          <div className="selector-header">
            <div>
              <h1 style={{ marginBottom: '6px' }}>{displayUsername}</h1>
              <div className="subtle">
                {profile?.email || authUser.email || 'No email available'}
              </div>
            </div>

            <div className="inline-row">
              <button type="button" className="selector-action" disabled>
                Edit Profile
              </button>
              <button type="button" className="selector-action" disabled>
                Create Group
              </button>
              <button type="button" className="selector-action" disabled>
                Join Group
              </button>
            </div>
          </div>

          <div className="quick-stats">
            <ProfileStatCard
              label="Drafts"
              value={drafts.length}
              sublabel="Saved and completed mocks"
            />
            <ProfileStatCard
              label="Groups"
              value={groups.length}
              sublabel="Spaces to compare with friends"
            />
            <ProfileStatCard
              label="Member Since"
              value={memberSince}
              sublabel="Account creation date"
            />
            <ProfileStatCard
              label="Favorite Team"
              value={profile?.favoriteTeam || '—'}
              sublabel="Can be editable later"
            />
          </div>

          <div className="panel" style={{ marginTop: '18px', padding: '16px' }}>
            <h3 style={{ marginTop: 0 }}>About</h3>
            <p className="subtle" style={{ marginBottom: 0 }}>
              {profile?.bio?.trim()
                ? profile.bio
                : 'No bio added yet. This is a good spot later for favorite team, draft style, and a short profile note.'}
            </p>
          </div>
        </div>

        <div className="side-panel">
          <div className="panel" style={{ height: '100%' }}>
            <h3 style={{ marginTop: 0 }}>Account Snapshot</h3>

            <div className="selection-grid">
              <div>
                <div className="stat-label">Username</div>
                <div className="stat-value">{displayUsername}</div>
              </div>

              <div>
                <div className="stat-label">Email</div>
                <div className="subtle">{profile?.email || authUser.email || '—'}</div>
              </div>

              <div>
                <div className="stat-label">UID</div>
                <div className="subtle">{authUser.uid}</div>
              </div>

              <div>
                <div className="stat-label">Last Loaded</div>
                <div className="subtle">{new Date().toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="draft-layout"
        style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', marginTop: '18px' }}
      >
        <DraftListCard drafts={drafts} />
        <GroupsListCard groups={groups} />
      </div>
    </div>
  );
}