import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  query,
  serverTimestamp,
  updateDoc,
  where,
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

function getDraftStatusLabel(draft) {
  if (!draft) return 'Unknown';
  if (draft.status === 'completed') return 'Completed';
  if (draft.status === 'in_progress') return 'In Progress';
  return draft.status ?? 'Saved';
}

function getDraftProgressLabel(draft) {
  if (!draft) return '—';

  if (draft.status === 'completed') return 'Finished';
  if (draft.currentOverallPick) return `On pick #${draft.currentOverallPick}`;
  return 'Not started';
}

function makeInviteCode(length = 6) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let output = '';

  for (let i = 0; i < length; i += 1) {
    output += chars[Math.floor(Math.random() * chars.length)];
  }

  return output;
}

function ModalShell({ title, onClose, children }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="panel profile-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="selector-header">
          <div>
            <h3 className="selector-title">{title}</h3>
          </div>

          <button type="button" className="selector-action" onClick={onClose}>
            Close
          </button>
        </div>

        {children}
      </div>
    </div>
  );
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
                  <Link to={`/draft/${draft.id}`} className="selector-action">
                    Open Draft
                  </Link>
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
                {group.description?.trim() ? group.description : 'No description yet.'}
              </div>

              <div className="player-actions">
                <div className="inline-row">
                  <Link to={`/groups/${group.id}`} className="selector-action">
                    Open Group
                  </Link>
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
  const { user, profile } = useAuth();

  const [profileData, setProfileData] = useState(null);
  const [drafts, setDrafts] = useState([]);
  const [groups, setGroups] = useState([]);

  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState('');
  const [actionError, setActionError] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');

  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [showJoinGroupModal, setShowJoinGroupModal] = useState(false);

  const [savingProfile, setSavingProfile] = useState(false);
  const [creatingGroup, setCreatingGroup] = useState(false);
  const [joiningGroup, setJoiningGroup] = useState(false);

  const [editUsername, setEditUsername] = useState('');
  const [editFavoriteTeam, setEditFavoriteTeam] = useState('');
  const [editBio, setEditBio] = useState('');

  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');

  const [joinCode, setJoinCode] = useState('');

  async function loadProfilePageData(currentUser) {
    if (!currentUser?.uid) {
      setProfileData(null);
      setDrafts([]);
      setGroups([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setPageError('');

    try {
      const userRef = doc(db, 'users', currentUser.uid);
      const draftsRef = collection(db, 'drafts');
      const groupsRef = collection(db, 'groups');

      const [userSnap, draftsSnap, groupsSnap] = await Promise.all([
        getDoc(userRef),
        getDocs(query(draftsRef, where('ownerUid', '==', currentUser.uid))),
        getDocs(query(groupsRef, where('memberUids', 'array-contains', currentUser.uid))),
      ]);

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

      setProfileData(userData);
      setDrafts(sortByNewest(draftRows, 'updatedAt'));
      setGroups(sortByNewest(groupRows, 'createdAt'));
    } catch (error) {
      console.error('[profile-page] failed to load profile data', error);
      setPageError(error?.message || 'Failed to load profile data.');
      setProfileData(null);
      setDrafts([]);
      setGroups([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProfilePageData(user);
  }, [user]);

  const displayUsername = useMemo(() => {
    return (
      profileData?.username ||
      profile?.username ||
      user?.displayName ||
      user?.email?.split('@')[0] ||
      'User'
    );
  }, [profileData, profile, user]);

  const memberSince = useMemo(() => {
    return formatDate(profileData?.createdAt);
  }, [profileData]);

  function openEditModal() {
    setActionError('');
    setActionSuccess('');
    setEditUsername(profileData?.username || profile?.username || '');
    setEditFavoriteTeam(profileData?.favoriteTeam || '');
    setEditBio(profileData?.bio || '');
    setShowEditModal(true);
  }

  function openCreateGroupModal() {
    setActionError('');
    setActionSuccess('');
    setGroupName('');
    setGroupDescription('');
    setShowCreateGroupModal(true);
  }

  function openJoinGroupModal() {
    setActionError('');
    setActionSuccess('');
    setJoinCode('');
    setShowJoinGroupModal(true);
  }

  async function handleSaveProfile(event) {
    event.preventDefault();

    if (!user?.uid) {
      setActionError('You must be signed in to edit your profile.');
      return;
    }

    if (!editUsername.trim()) {
      setActionError('Username cannot be empty.');
      return;
    }

    setSavingProfile(true);
    setActionError('');
    setActionSuccess('');

    try {
      const userRef = doc(db, 'users', user.uid);

      await updateDoc(userRef, {
        username: editUsername.trim(),
        favoriteTeam: editFavoriteTeam.trim(),
        bio: editBio.trim(),
      });

      await loadProfilePageData(user);
      setActionSuccess('Profile updated.');
      setShowEditModal(false);
    } catch (error) {
      console.error('[profile-page] save profile failed', error);
      setActionError(error?.message || 'Could not update profile.');
    } finally {
      setSavingProfile(false);
    }
  }

  async function handleCreateGroup(event) {
    event.preventDefault();

    if (!user?.uid) {
      setActionError('You must be signed in to create a group.');
      return;
    }

    if (!groupName.trim()) {
      setActionError('Group name is required.');
      return;
    }

    setCreatingGroup(true);
    setActionError('');
    setActionSuccess('');

    try {
      const inviteCode = makeInviteCode(6);

      await addDoc(collection(db, 'groups'), {
        name: groupName.trim(),
        description: groupDescription.trim(),
        ownerUid: user.uid,
        ownerUsername: displayUsername,
        createdAt: serverTimestamp(),
        inviteCode,
        memberUids: [user.uid],
        memberCount: 1,
      });

      await loadProfilePageData(user);
      setActionSuccess(`Group created. Invite code: ${inviteCode}`);
      setShowCreateGroupModal(false);
    } catch (error) {
      console.error('[profile-page] create group failed', error);
      setActionError(error?.message || 'Could not create group.');
    } finally {
      setCreatingGroup(false);
    }
  }

  async function handleJoinGroup(event) {
    event.preventDefault();

    if (!user?.uid) {
      setActionError('You must be signed in to join a group.');
      return;
    }

    const normalizedCode = joinCode.trim().toUpperCase();

    if (!normalizedCode) {
      setActionError('Enter an invite code.');
      return;
    }

    setJoiningGroup(true);
    setActionError('');
    setActionSuccess('');

    try {
      const groupsRef = collection(db, 'groups');
      const inviteQuery = query(groupsRef, where('inviteCode', '==', normalizedCode));
      const snap = await getDocs(inviteQuery);

      if (snap.empty) {
        throw new Error('No group found for that invite code.');
      }

      const groupDoc = snap.docs[0];
      const groupData = groupDoc.data();
      const groupRef = doc(db, 'groups', groupDoc.id);

      const memberUids = Array.isArray(groupData.memberUids) ? groupData.memberUids : [];

      if (memberUids.includes(user.uid)) {
        setActionSuccess(`You are already in ${groupData.name}.`);
        setShowJoinGroupModal(false);
        return;
      }

      await updateDoc(groupRef, {
        memberUids: arrayUnion(user.uid),
        memberCount: increment(1),
      });

      await loadProfilePageData(user);
      setActionSuccess(`Joined ${groupData.name}.`);
      setShowJoinGroupModal(false);
    } catch (error) {
      console.error('[profile-page] join group failed', error);
      setActionError(error?.message || 'Could not join group.');
    } finally {
      setJoiningGroup(false);
    }
  }

  if (loading) {
    return (
      <div className="page">
        <TopNav />
        <div className="loading-screen">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
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
    <div className="app-shell">
      <div className="page">
        <TopNav />

        {pageError ? (
          <div className="panel" style={{ marginBottom: '18px' }}>
            <p className="error-text">{pageError}</p>
          </div>
        ) : null}

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

        <div className="home-grid">
          <div className="hero-panel">
            <div className="selector-header">
              <div>
                <h1 style={{ marginBottom: '6px' }}>{displayUsername}</h1>
                <div className="subtle">
                  {profileData?.email || user.email || 'No email available'}
                </div>
              </div>

              <div className="inline-row">
                <button type="button" className="selector-action" onClick={openEditModal}>
                  Edit Profile
                </button>
                <button type="button" className="selector-action" onClick={openCreateGroupModal}>
                  Create Group
                </button>
                <button type="button" className="selector-action" onClick={openJoinGroupModal}>
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
                value={profileData?.favoriteTeam || '—'}
                sublabel="Set in Edit Profile"
              />
            </div>

            <div className="panel" style={{ marginTop: '18px', padding: '16px' }}>
              <h3 style={{ marginTop: 0 }}>About</h3>
              <p className="subtle" style={{ marginBottom: 0 }}>
                {profileData?.bio?.trim()
                  ? profileData.bio
                  : 'No bio added yet. Add one in Edit Profile.'}
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
                  <div className="subtle">{profileData?.email || user.email || '—'}</div>
                </div>

                <div>
                  <div className="stat-label">UID</div>
                  <div className="subtle">{user.uid}</div>
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

        {showEditModal ? (
          <ModalShell title="Edit Profile" onClose={() => setShowEditModal(false)}>
            <form className="form-grid" onSubmit={handleSaveProfile}>
              <div className="field">
                <label htmlFor="profile-username">Username</label>
                <input
                  id="profile-username"
                  value={editUsername}
                  onChange={(event) => setEditUsername(event.target.value)}
                  placeholder="Username"
                />
              </div>

              <div className="field">
                <label htmlFor="profile-favorite-team">Favorite Team</label>
                <input
                  id="profile-favorite-team"
                  value={editFavoriteTeam}
                  onChange={(event) => setEditFavoriteTeam(event.target.value)}
                  placeholder="Falcons"
                />
              </div>

              <div className="field">
                <label htmlFor="profile-bio">Bio</label>
                <input
                  id="profile-bio"
                  value={editBio}
                  onChange={(event) => setEditBio(event.target.value)}
                  placeholder="A few words about your draft style"
                />
              </div>

              <div className="inline-row">
                <button type="submit" className="primary-btn" disabled={savingProfile}>
                  {savingProfile ? 'Saving...' : 'Save Profile'}
                </button>
              </div>
            </form>
          </ModalShell>
        ) : null}

        {showCreateGroupModal ? (
          <ModalShell title="Create Group" onClose={() => setShowCreateGroupModal(false)}>
            <form className="form-grid" onSubmit={handleCreateGroup}>
              <div className="field">
                <label htmlFor="group-name">Group Name</label>
                <input
                  id="group-name"
                  value={groupName}
                  onChange={(event) => setGroupName(event.target.value)}
                  placeholder="Friday Night Mockers"
                />
              </div>

              <div className="field">
                <label htmlFor="group-description">Description</label>
                <input
                  id="group-description"
                  value={groupDescription}
                  onChange={(event) => setGroupDescription(event.target.value)}
                  placeholder="Mock drafts with friends"
                />
              </div>

              <div className="inline-row">
                <button type="submit" className="primary-btn" disabled={creatingGroup}>
                  {creatingGroup ? 'Creating...' : 'Create Group'}
                </button>
              </div>
            </form>
          </ModalShell>
        ) : null}

        {showJoinGroupModal ? (
          <ModalShell title="Join Group" onClose={() => setShowJoinGroupModal(false)}>
            <form className="form-grid" onSubmit={handleJoinGroup}>
              <div className="field">
                <label htmlFor="join-code">Invite Code</label>
                <input
                  id="join-code"
                  value={joinCode}
                  onChange={(event) => setJoinCode(event.target.value.toUpperCase())}
                  placeholder="ABC123"
                />
              </div>

              <div className="inline-row">
                <button type="submit" className="primary-btn" disabled={joiningGroup}>
                  {joiningGroup ? 'Joining...' : 'Join Group'}
                </button>
              </div>
            </form>
          </ModalShell>
        ) : null}
      </div>
    </div>
  );
}