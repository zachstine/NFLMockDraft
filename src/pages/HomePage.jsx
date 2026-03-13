import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { NFL_TEAMS } from '../data/teams';
import { createMockDraft } from '../services/draftService';
import { useAuth } from '../context/AuthContext';

const ROUND_OPTIONS = ['1', '2', '3', '4', '5', '6', '7'];

const TEAM_DIVISIONS = [
  {
    conference: 'AFC',
    division: 'North',
    teams: ['BAL', 'CIN', 'CLE', 'PIT'],
  },
  {
    conference: 'AFC',
    division: 'South',
    teams: ['HOU', 'IND', 'JAX', 'TEN'],
  },
  {
    conference: 'AFC',
    division: 'East',
    teams: ['BUF', 'MIA', 'NE', 'NYJ'],
  },
  {
    conference: 'AFC',
    division: 'West',
    teams: ['DEN', 'KC', 'LV', 'LAC'],
  },
  {
    conference: 'NFC',
    division: 'North',
    teams: ['CHI', 'DET', 'GB', 'MIN'],
  },
  {
    conference: 'NFC',
    division: 'South',
    teams: ['ATL', 'NO', 'CAR', 'TB'],
  },
  {
    conference: 'NFC',
    division: 'East',
    teams: ['DAL', 'NYG', 'PHI', 'WAS'],
  },
  {
    conference: 'NFC',
    division: 'West',
    teams: ['ARI', 'LAR', 'SF', 'SEA'],
  },
];

const TEAM_LOOKUP = Object.fromEntries(NFL_TEAMS.map((team) => [team.abbr, team]));

function getDisplayUsername(profile, user) {
  return (
    profile?.username ||
    user?.displayName ||
    user?.email?.split('@')[0] ||
    'GM'
  );
}

function getFriendlyErrorMessage(error) {
  if (!error) return 'Could not start draft.';

  if (error.code === 'permission-denied') {
    return 'Firestore denied permission while creating the draft. This usually means the draftService write pattern does not match your Firestore rules.';
  }

  if (error.code === 'unauthenticated') {
    return 'You must be logged in to start a draft.';
  }

  return error.message || 'Could not start draft.';
}

export default function HomePage() {
  const navigate = useNavigate();
  const { user, profile } = useAuth();

  const [selectedTeams, setSelectedTeams] = useState([]);
  const [rounds, setRounds] = useState('');
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState('');

  const allTeamsSelected = selectedTeams.length === NFL_TEAMS.length;
  const displayUsername = getDisplayUsername(profile, user);

  const roundLabel = useMemo(() => {
    if (!rounds) return 'None';
    return rounds === 'ALL' ? '1-7' : `1-${rounds}`;
  }, [rounds]);

  const selectedTeamLabel = useMemo(() => {
    if (selectedTeams.length === 0) return 'None';
    if (selectedTeams.length === NFL_TEAMS.length) return 'All 32';
    if (selectedTeams.length === 1) {
      return TEAM_LOOKUP[selectedTeams[0]]?.name ?? selectedTeams[0];
    }
    return `${selectedTeams.length} Teams`;
  }, [selectedTeams]);

  function toggleTeam(teamAbbr) {
    setSelectedTeams((prev) =>
      prev.includes(teamAbbr)
        ? prev.filter((abbr) => abbr !== teamAbbr)
        : [...prev, teamAbbr]
    );
  }

  function handleSelectAllTeams() {
    setSelectedTeams((prev) =>
      prev.length === NFL_TEAMS.length ? [] : NFL_TEAMS.map((team) => team.abbr)
    );
  }

  async function handleStartDraft() {
    setStarting(true);
    setError('');

    try {
      if (!user?.uid) {
        throw new Error('You must be logged in to start a draft.');
      }

      if (selectedTeams.length === 0) {
        throw new Error('Select at least one team or choose Select All.');
      }

      if (!rounds) {
        throw new Error('Select rounds or choose Select All.');
      }

      const payload = {
        ownerUid: user.uid,
        username: profile?.username ?? 'GM',
        selectedTeams,
        selectedTeam:
          selectedTeams.length === NFL_TEAMS.length
            ? 'ALL'
            : selectedTeams.length === 1
            ? selectedTeams[0]
            : 'MULTI',
        rounds: rounds === 'ALL' ? 7 : Number(rounds),
        year: '2026',
      };

      console.log('[home-page] createMockDraft payload', payload);

      const mockId = await createMockDraft(payload);

      console.log('[home-page] draft created', mockId);

      navigate(`/draft/${mockId}`);
    } catch (startError) {
      console.error('[home-page] Start draft failed:', startError);
      console.error('[home-page] Firebase error code:', startError?.code);
      console.error('[home-page] Firebase error message:', startError?.message);
      setError(getFriendlyErrorMessage(startError));
    } finally {
      setStarting(false);
    }
  }

  return (
    <div className="app-shell">
      <div className="page">
        <TopNav />

        <div className="home-grid">
          <div className="hero-panel panel">
            <div className="selector-header">
              <div>
                <h1 style={{ marginBottom: '6px' }}>Start a new mock draft</h1>
                <p className="subtle" style={{ margin: 0 }}>
                  Choose one, several, or all teams. Then choose how many rounds to simulate.
                </p>
              </div>

              <div className="inline-row">
                <Link to="/profile" className="selector-action">
                  Open Profile
                </Link>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <div className="selector-header">
                <div>
                  <h2 className="selector-title">Choose teams</h2>
                  <p className="subtle">You can select one, multiple, or all teams.</p>
                </div>

                <button
                  type="button"
                  className={`selector-action ${allTeamsSelected ? 'active' : ''}`}
                  onClick={handleSelectAllTeams}
                >
                  {allTeamsSelected ? 'Clear All' : 'Select All'}
                </button>
              </div>

              <div className="division-grid">
                {TEAM_DIVISIONS.map((group) => (
                  <div key={`${group.conference}-${group.division}`} className="division-column">
                    <div className="division-label">
                      {group.conference} {group.division}
                    </div>

                    <div className="division-team-list">
                      {group.teams.map((abbr) => {
                        const team = TEAM_LOOKUP[abbr];
                        const isActive = selectedTeams.includes(team.abbr);

                        return (
                          <button
                            key={team.abbr}
                            type="button"
                            className={`team-card compact ${isActive ? 'active' : ''}`}
                            onClick={() => toggleTeam(team.abbr)}
                          >
                            <img
                              src={team.logo}
                              alt={`${team.name} logo`}
                              className="team-logo compact"
                            />
                            <span className="team-name compact">{team.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '28px' }}>
              <div className="selector-header">
                <div>
                  <h2 className="selector-title">Choose rounds</h2>
                  <p className="subtle">Select a range or simulate the full draft.</p>
                </div>

                <button
                  type="button"
                  className={`selector-action ${rounds === 'ALL' ? 'active' : ''}`}
                  onClick={() => setRounds(rounds === 'ALL' ? '' : 'ALL')}
                >
                  {rounds === 'ALL' ? 'Clear' : 'Select All'}
                </button>
              </div>

              <div className="round-grid">
                {ROUND_OPTIONS.map((round) => {
                  const isActive = rounds === round;

                  return (
                    <button
                      key={round}
                      type="button"
                      className={`round-card ${isActive ? 'active' : ''}`}
                      onClick={() => setRounds(round)}
                    >
                      {round}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="inline-row" style={{ marginTop: '24px' }}>
              <button
                type="button"
                className="primary-btn"
                onClick={handleStartDraft}
                disabled={starting || selectedTeams.length === 0 || !rounds}
              >
                {starting ? 'Starting...' : 'Start Draft'}
              </button>

              {error ? <span className="error-text">{error}</span> : null}
            </div>

            <div className="quick-stats">
              <div className="stat-card">
                <div className="stat-label">Teams selected</div>
                <div className="stat-value">
                  {selectedTeams.length === 0
                    ? 'None'
                    : allTeamsSelected
                    ? 'All 32'
                    : selectedTeams.length}
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-label">Rounds loaded</div>
                <div className="stat-value">{roundLabel}</div>
              </div>
            </div>
          </div>

          <div className="side-panel panel">
            <div className="selector-header">
              <div>
                <h3 className="selector-title">Welcome back</h3>
                <div className="subtle">Your draft profile at a glance.</div>
              </div>
            </div>

            <div className="selection-grid">
              <div>
                <div className="stat-label">Signed in as</div>
                <div className="stat-value">{displayUsername}</div>
              </div>

              <div>
                <div className="stat-label">Email</div>
                <div className="subtle">{user?.email || '—'}</div>
              </div>

              <div>
                <div className="stat-label">Current team setup</div>
                <div className="subtle">{selectedTeamLabel}</div>
              </div>

              <div>
                <div className="stat-label">Current round setup</div>
                <div className="subtle">{roundLabel}</div>
              </div>

              <div>
                <div className="stat-label">Favorite Team</div>
                <div className="subtle">{profile?.favoriteTeam || '—'}</div>
              </div>
            </div>

            <div className="inline-row" style={{ marginTop: '20px' }}>
              <Link to="/profile" className="selector-action">
                Go to Profile
              </Link>
            </div>

            <div className="panel" style={{ marginTop: '18px', padding: '16px' }}>
              <h3 style={{ marginTop: 0, marginBottom: '10px' }}>What’s next</h3>
              <div className="subtle">
                Profile is your hub for saved drafts, group membership, and account settings.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}