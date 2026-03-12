import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { ALL_TEAMS_OPTION, NFL_TEAMS } from '../data/teams';
import { createMockDraft } from '../services/draftService';
import { useAuth } from '../context/AuthContext';

export default function HomePage() {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const [selectedTeam, setSelectedTeam] = useState('ALL');
  const [rounds, setRounds] = useState('7');
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState('');

  const roundLabel = useMemo(() => (rounds === 'ALL' ? '1-7' : `1-${rounds}`), [rounds]);

  async function handleStartDraft() {
    setStarting(true);
    setError('');

    try {
      const mockId = await createMockDraft({
        ownerUid: user.uid,
        username: profile?.username ?? 'GM',
        selectedTeam,
        rounds: rounds === 'ALL' ? 7 : Number(rounds),
        year: '2026',
      });

      navigate(`/draft/${mockId}`);
    } catch (startError) {
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
              Choose one franchise or run the entire board. This starter saves drafts to Firestore and auto-picks for non-user teams when you draft for a single club.
            </p>

            <div className="selection-grid" style={{ marginTop: '18px' }}>
              <div className="field">
                <label htmlFor="team-select">Team selection</label>
                <select
                  id="team-select"
                  value={selectedTeam}
                  onChange={(event) => setSelectedTeam(event.target.value)}
                >
                  <option value={ALL_TEAMS_OPTION.value}>{ALL_TEAMS_OPTION.label}</option>
                  {NFL_TEAMS.map((team) => (
                    <option key={team.abbr} value={team.abbr}>
                      {team.city} {team.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="round-select">Round selection</label>
                <select
                  id="round-select"
                  value={rounds}
                  onChange={(event) => setRounds(event.target.value)}
                >
                  <option value="1">Round 1</option>
                  <option value="2">Rounds 1-2</option>
                  <option value="3">Rounds 1-3</option>
                  <option value="4">Rounds 1-4</option>
                  <option value="5">Rounds 1-5</option>
                  <option value="6">Rounds 1-6</option>
                  <option value="7">Rounds 1-7</option>
                  <option value="ALL">All rounds</option>
                </select>
              </div>

              <div className="inline-row">
                <button className="primary-btn" onClick={handleStartDraft} disabled={starting}>
                  {starting ? 'Starting...' : 'Start Draft'}
                </button>
                {error && <span className="error-text">{error}</span>}
              </div>
            </div>

            <div className="quick-stats">
              <div className="stat-card">
                <div className="stat-label">Mode</div>
                <div className="stat-value">
                  {selectedTeam === 'ALL' ? 'League-wide' : `${selectedTeam} focus`}
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Rounds loaded</div>
                <div className="stat-value">{roundLabel}</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Picks in run</div>
                <div className="stat-value">{(rounds === 'ALL' ? 7 : Number(rounds)) * 32}</div>
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
              This first version is built to give you a stable shell in VSCode: auth, routing, draft board, player list, and Firestore persistence.
            </p>

            <ul className="subtle" style={{ paddingLeft: '20px' }}>
              <li>Username/password style auth</li>
              <li>Draft board stays visible while you pick</li>
              <li>All teams or one team mode</li>
              <li>Sample player fallback before live imports</li>
              <li>Ready for GitHub + Firebase Hosting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
