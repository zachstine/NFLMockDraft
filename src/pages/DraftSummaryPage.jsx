import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import DraftSummary from '../components/DraftSummary';
import { db } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';

export default function DraftSummaryPage() {
  const { mockId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [mock, setMock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadMock() {
      if (!user?.uid || !mockId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError('');

        const ref = doc(db, 'mocks', mockId);
        const snap = await getDoc(ref);

        if (!snap.exists()) {
          throw new Error('Draft not found.');
        }

        const data = { id: snap.id, ...snap.data() };

        if (data.ownerUid && data.ownerUid !== user.uid) {
          throw new Error('You do not have permission to view this draft.');
        }

        if (!cancelled) {
          setMock(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Failed to load draft summary.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadMock();

    return () => {
      cancelled = true;
    };
  }, [mockId, user?.uid]);

  if (loading) {
    return <div className="page-shell">Loading draft summary...</div>;
  }

  if (error) {
    return (
      <div className="page-shell">
        <div className="error-banner">{error}</div>
        <Link to="/profile" className="text-button-link">
          Back to Profile
        </Link>
      </div>
    );
  }

  if (!mock) {
    return (
      <div className="page-shell">
        <div className="error-banner">Draft not found.</div>
        <Link to="/profile" className="text-button-link">
          Back to Profile
        </Link>
      </div>
    );
  }

  const subtitle = mock?.title
    ? mock.title
    : `Mock Draft ${mock.id}`;

  return (
    <div className="page-shell">
      <div className="page-toolbar">
        {mock?.status !== 'completed' ? (
          <button
            type="button"
            className="secondary-button"
            onClick={() => navigate(`/draft/${mock.id}`)}
          >
            Return to Draft
          </button>
        ) : null}

        <Link to="/profile" className="secondary-button">
          Back to Profile
        </Link>
      </div>

      <DraftSummary
        mock={mock}
        title="My Draft Summary"
        subtitle={subtitle}
      />
    </div>
  );
}