import { useNavigate, useLocation } from 'react-router-dom';
import { logOutUser } from '../services/authService';
import { useAuth } from '../context/AuthContext';

function getDisplayUsername(profile, user) {
  return (
    profile?.username ||
    user?.displayName ||
    user?.email?.split('@')[0] ||
    'GM'
  );
}

export default function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, profile } = useAuth();

  const displayUsername = getDisplayUsername(profile, user);

  const isHome = location.pathname === '/';
  const isProfile = location.pathname === '/profile';
  const isDraftPage = location.pathname.startsWith('/draft/');
  const isGroupPage = location.pathname.startsWith('/groups/');
  const isGroupsTab =
    isGroupPage ||
    (location.pathname === '/profile' && location.hash === '#groups-section');

  async function handleLogout() {
    await logOutUser();
    navigate('/login');
  }

  function handleGroupsNavigate() {
    navigate('/profile#groups-section');
  }

  return (
    <div className="top-nav">
      <div className="brand-block">
        <div className="brand-title">NFL Mock Draft HQ</div>
        <div className="brand-subtitle">
          Signed in as <strong>{displayUsername}</strong>
        </div>
      </div>

      <div className="nav-actions">
        <button
          type="button"
          className={isHome ? 'secondary-btn' : 'ghost-btn'}
          onClick={() => navigate('/')}
        >
          Home
        </button>

        <button
          type="button"
          className={isProfile && !isGroupsTab ? 'secondary-btn' : 'ghost-btn'}
          onClick={() => navigate('/profile')}
        >
          Profile
        </button>

        <button
          type="button"
          className={isGroupsTab ? 'secondary-btn' : 'ghost-btn'}
          onClick={handleGroupsNavigate}
        >
          Groups
        </button>

        <button
          type="button"
          className="secondary-btn"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}