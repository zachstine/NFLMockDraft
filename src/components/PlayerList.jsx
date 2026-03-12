export default function PlayerList({
  players,
  currentSlot,
  canUserPick,
  onPick,
  loading,
}) {
  return (
    <div className="panel scroll-panel">
      <div className="toolbar-top">
        <div>
          <h3>Available Players</h3>
          <p className="subtle">
            {currentSlot
              ? `On the clock: ${currentSlot.team} at #${currentSlot.overall}`
              : 'Draft complete'}
          </p>
        </div>
        <div className="inline-row">
          {currentSlot && <span className="round-pill">Round {currentSlot.round}</span>}
          {currentSlot && <span className="team-pill">{currentSlot.team}</span>}
        </div>
      </div>

      {loading ? (
        <div className="empty-state">Loading prospects...</div>
      ) : players.length === 0 ? (
        <div className="empty-state">No available players match the current filters.</div>
      ) : (
        <div className="player-list">
          {players.map((player) => (
            <div className="player-card" key={player.id}>
              <div className="player-meta">
                <div>
                  <h4>{player.fullName}</h4>
                  <div className="subtle">{player.school}</div>
                </div>
                <div className="inline-row">
                  <span className="position-pill">{player.position}</span>
                  <span className="badge">Rank #{player.overallRank}</span>
                </div>
              </div>

              <div className="inline-row" style={{ marginTop: '10px' }}>
                <span className="badge">Team Rank #{player.teamRank ?? player.overallRank}</span>
                <span className="badge">Source: {player.source ?? 'manual'}</span>
              </div>

              <div className="player-actions">
                <button
                  className="primary-btn"
                  disabled={!canUserPick || !currentSlot}
                  onClick={() => onPick(player)}
                >
                  Draft Player
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
