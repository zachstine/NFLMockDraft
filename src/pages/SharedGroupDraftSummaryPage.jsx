import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import DraftSummary from '../components/DraftSummary';
import { db } from '../lib/firebase';

export default function SharedGroupDraftSummaryPage() {
  const { groupId, mockId } = useParams();

  const [mock, setMock] = useState(null);
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadSharedMock() {
      if (!groupId || !mockId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError('');

        const [groupSnap, mockSnap] = await Promise.all([
          getDoc(doc(db, 'groups', groupId)),
          getDoc(doc(db, 'groups', groupId, 'sharedMocks', mockId)),
        ]);

        if (!groupSnap.exists()) {
          throw new Error('Group not found.');
        }

        if (!mockSnap.exists()) {
          throw new Error('Shared draft not found.');
        }

        if (!cancelled) {
          setGroup({ id: groupSnap.id, ...groupSnap.data() });
          setMock({ id: mockSnap.id, ...mockSnap.data() });
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Failed to load shared draft summary.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadSharedMock();

    return () => {
      cancelled = true;
    };
  }, [groupId, mockId]);

  if (loading) {
    return <div className="page-shell">Loading shared draft summary...</div>;
  }

  if (error) {
    return (
      <div className="page-shell">
        <div className="error-banner">{error}</div>
        <Link to={`/groups/${groupId}`} className="text-button-link">
          Back to Group
        </Link>
      </div>
    );
  }

  if (!mock) {
    return (
      <div className="page-shell">
        <div className="error-banner">Shared draft not found.</div>
        <Link to={`/groups/${groupId}`} className="text-button-link">
          Back to Group
        </Link>
      </div>
    );
  }

  const sharedByName =
    mock?.sharedByUsername ||
    mock?.ownerUsername ||
    'Group Member';

  const groupName = group?.name || 'Group';
  const subtitle = `${sharedByName} • ${groupName}`;

  return (
    <div className="page-shell">
      <div className="page-toolbar">
        <Link to={`/groups/${groupId}`} className="secondary-button">
          Back to Group
        </Link>
      </div>

      <DraftSummary
        mock={mock}
        title="Shared Draft Summary"
        subtitle={subtitle}
      />
    </div>
  );
}