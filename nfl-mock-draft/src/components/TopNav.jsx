import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../services/authService';
import { useAuth } from '../context/AuthContext';

export default function TopNav() {
  const navigate = useNavigate();
  const { profile } = useAuth();

  async function handleLogout() {
    await logOutUser();
    navigate('/login');
  }

  return (
    <div className="top-nav">
      <div className="brand-block">
        <div className="brand-title">NFL Mock Draft HQ</div>
        <div className="brand-subtitle">
          Signed in as <strong>{profile?.username ?? 'GM'}</strong>
        </div>
      </div>

      <div className="nav-actions">
        <button className="ghost-btn" onClick={() => navigate('/')}>
          Home
        </button>
        <button className="secondary-btn" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}
