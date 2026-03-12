import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

export default function HomePage() {
  const navigate = useNavigate();
  const { user, profile } = useAuth();

  const [selectedTeams, setSelectedTeams] = useState([]);
  const [rounds, setRounds] = useState('');
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState('');

  const allTeamsSelected = selectedTeams.length === NFL_TEAMS.length;

  const roundLabel = useMemo(() => {
    if (!rounds) return 'None';
    return rounds === 'ALL' ? '1-7' : `1-${rounds}`;
  }, [rounds]);

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

      console.log('Starting draft with:', {
        uid: user?.uid,
        username: profile?.username,
        selectedTeams,
        rounds: rounds === 'ALL' ? 7 : Number(rounds),
        year: '2026',
      });

      const mockId = await createMockDraft({
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
      });

      navigate(`/draft/${mockId}`);
    } catch (startError) {
      console.error('Start draft failed:', startError);
      setError(startError.message || 'Could not start draft.');
    } finally {
      setStarting(false);
    }
  }

  return (
    <div className="app-shell">
      <div className="page">
        <TopNav />

        <div className="home-grid single-column">
          <div className="hero-panel panel">
            <h1>Start a new mock draft</h1>
            <p className="subtle">
              Choose one, several, or all teams. Then choose how many rounds to simulate.
            </p>

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
                className="primary-btn"
                onClick={handleStartDraft}
                disabled={starting || selectedTeams.length === 0 || !rounds}
              >
                {starting ? 'Starting...' : 'Start Draft'}
              </button>
              {error && <span className="error-text">{error}</span>}
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
        </div>
      </div>
    </div>
  );
}