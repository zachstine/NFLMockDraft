function PickItem({ slot, pick }) {
  return (
    <div className="pick-card">
      <div className="pick-header">
        <span className="pick-number">#{slot.overall}</span>
        <span className="team-pill">{slot.team}</span>
      </div>
      <h4>{pick ? pick.playerName : 'Pick pending'}</h4>
      <div className="subtle">
        Round {slot.round}, Pick {slot.pickInRound}
      </div>
      <div className="inline-row" style={{ marginTop: '10px' }}>
        <span className="position-pill">{pick ? pick.position : '—'}</span>
        <span className="badge">{pick ? pick.school : 'Waiting'}</span>
        {pick?.isAuto && <span className="badge">Auto</span>}
      </div>
    </div>
  );
}

export default function DraftBoard({ board, picks }) {
  const picksByOverall = new Map(picks.map((pick) => [pick.overallPick, pick]));

  return (
    <div className="panel scroll-panel">
      <h3>Draft Board</h3>
      <p className="subtle">Every pick stays on the board as the draft moves forward.</p>

      <div className="pick-list">
        {board.map((slot) => (
          <PickItem key={slot.overall} slot={slot} pick={picksByOverall.get(slot.overall)} />
        ))}
      </div>
    </div>
  );
}
