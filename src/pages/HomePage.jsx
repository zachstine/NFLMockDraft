import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { NFL_TEAMS } from '../data/teams';
import { createMockDraft } from '../services/draftService';
import { useAuth } from '../context/AuthContext';

const ROUND_OPTIONS = ['1', '2', '3', '4', '5', '6', '7'];

export default function HomePage() {
  const navigate = useNavigate();
  const { user, profile } = useAuth();

  const [selectedTeam, setSelectedTeam] = useState('');
  const [rounds, setRounds] = useState('');
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState('');

  const roundLabel = useMemo(() => {
    if (!rounds) return 'None';
    return rounds === 'ALL' ? '1-7' : `1-${rounds}`;
  }, [rounds]);

  const picksInRun = useMemo(() => {
    if (!rounds) return 0;
    return (rounds === 'ALL' ? 7 : Number(rounds)) * 32;
  }, [rounds]);

  async function handleStartDraft() {
    setStarting(true);
    setError('');

    try {
      if (!user?.uid) {
        throw new Error('You must be logged in to start a draft.');
      }

      if (!selectedTeam) {
        throw new Error('Select a team or choose Select All.');
      }

      if (!rounds) {
        throw new Error('Select rounds or choose Select All.');
      }

      console.log('Starting draft with:', {
        uid: user?.uid,
        username: profile?.username,
        selectedTeam,
        rounds: rounds === 'ALL' ? 7 : Number(rounds),
        year: '2026',
      });

      const mockId = await createMockDraft({
        ownerUid: user.uid,
        username: profile?.username ?? 'GM',
        selectedTeam,
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

        <div className="home-grid">
          <div className="hero-panel panel">
            <h1>Start a new mock draft</h1>
            <p className="subtle">
              Pick one franchise or run the whole board. Choose your team first, then choose how many rounds to simulate.
            </p>

            <div style={{ marginTop: '24px' }}>
              <div className="selector-header">
                <div>
                  <h2 className="selector-title">Choose your team</h2>
                  <p className="subtle">No team is selected by default.</p>
                </div>
                <button
                  type="button"
                  className={`selector-action ${selectedTeam === 'ALL' ? 'active' : ''}`}
                  onClick={() => setSelectedTeam('ALL')}
                >
                  Select All
                </button>
              </div>

              <div className="team-grid">
                {NFL_TEAMS.map((team) => {
                  const isActive = selectedTeam === team.abbr;

                  return (
                    <button
                      key={team.abbr}
                      type="button"
                      className={`team-card ${isActive ? 'active' : ''}`}
                      onClick={() => setSelectedTeam(team.abbr)}
                    >
                      <img
                        src={team.logo}
                        alt={`${team.city} ${team.name} logo`}
                        className="team-logo"
                      />
                      <span className="team-name">{team.city} {team.name}</span>
                      <span className="team-abbr">{team.abbr}</span>
                    </button>
                  );
                })}
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
                  onClick={() => setRounds('ALL')}
                >
                  Select All
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
                disabled={starting || !selectedTeam || !rounds}
              >
                {starting ? 'Starting...' : 'Start Draft'}
              </button>
              {error && <span className="error-text">{error}</span>}
            </div>

            <div className="quick-stats">
              <div className="stat-card">
                <div className="stat-label">Mode</div>
                <div className="stat-value">
                  {!selectedTeam
                    ? 'Not selected'
                    : selectedTeam === 'ALL'
                    ? 'League-wide'
                    : `${selectedTeam} focus`}
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Rounds loaded</div>
                <div className="stat-value">{roundLabel}</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Picks in run</div>
                <div className="stat-value">{picksInRun}</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Draft year</div>
                <div className="stat-value">2026</div>
              </div>
            </div>
          </div>

          <div className="side-panel panel">
            <h2>Starter notes</h2>
            <p className="subtle">
              This version swaps dropdowns for visual selectors so the pre-draft page feels more like a real draft hub.
            </p>

            <ul className="subtle" style={{ paddingLeft: '20px' }}>
              <li>Clickable team logo cards</li>
              <li>No default team selection</li>
              <li>Round boxes for 1 through 7</li>
              <li>Select All for teams and rounds</li>
              <li>Start button disabled until both are chosen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}