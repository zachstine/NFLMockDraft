export default function PlayerList({
  players,
  currentSlot,
  canUserPick,
  onPick,
  loading,
  activeTeam,
  upcomingPicks = [],
  nextUpcomingPick = null,
}) {
  function getPhysicalInfo(player) {
    const parts = [];

    if (player.height) {
      parts.push(player.height);
    }

    if (player.weight) {
      const weightValue =
        typeof player.weight === 'number' ? `${player.weight} lbs` : player.weight;
      parts.push(weightValue);
    }

    if (player.classYear) {
      parts.push(player.classYear);
    }

    return parts.join(' • ');
  }

  return (
    <div className="panel scroll-panel">
      <div className="toolbar-top">
        <div>
          <h3>Available Players</h3>
          <p className="subtle">
            {currentSlot
              ? `On the clock: ${activeTeam?.name ?? currentSlot.team} at #${currentSlot.overall}`
              : 'Draft complete'}
          </p>

          {currentSlot && (
            <div className="remaining-picks-row">
              <span className="remaining-picks-label">Remaining Picks:</span>
              <div className="remaining-picks-list">
                {upcomingPicks.length > 0 ? (
                  upcomingPicks.map((pickNumber) => (
                    <span
                      key={pickNumber}
                      className={`remaining-pick-chip ${
                        pickNumber === nextUpcomingPick ? 'next' : ''
                      }`}
                    >
                      {pickNumber}
                    </span>
                  ))
                ) : (
                  <span className="subtle">No remaining picks</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="inline-row">
          {currentSlot && <span className="round-pill">Round {currentSlot.round}</span>}
          {currentSlot && <span className="team-pill">{activeTeam?.name ?? currentSlot.team}</span>}
        </div>
      </div>

      {loading ? (
        <div className="empty-state">Loading prospects...</div>
      ) : players.length === 0 ? (
        <div className="empty-state">No available players match the current filters.</div>
      ) : (
        <div className="player-list">
          {players.map((player) => {
            const physicalInfo = getPhysicalInfo(player);

            return (
              <div className="player-card" key={player.id}>
                <div className="player-meta">
                  <div>
                    <h4>{player.fullName}</h4>
                    <div className="subtle">{player.school}</div>
                    {physicalInfo ? (
                      <div className="subtle" style={{ marginTop: '4px' }}>
                        {physicalInfo}
                      </div>
                    ) : null}
                  </div>
                  <div className="inline-row">
                    <span className="position-pill">{player.position}</span>
                    <span className="badge">Rank #{player.overallRank}</span>
                  </div>
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
            );
          })}
        </div>
      )}
    </div>
  );
}