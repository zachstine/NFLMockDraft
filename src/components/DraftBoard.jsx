import { NFL_TEAMS } from '../data/teams';
import { draftCapital2026 } from '../data/draftCapital2026';

function getTeamByAbbr(abbr) {
  return NFL_TEAMS.find((team) => team.abbr === abbr) ?? null;
}

function getRemainingTeamPicks(teamAbbr, currentOverallPick) {
  return (draftCapital2026[teamAbbr] || []).filter((pick) => pick >= currentOverallPick);
}

function PickItem({ slot, pick }) {
  const team = getTeamByAbbr(slot.team);
  const remainingPicks = getRemainingTeamPicks(slot.team, slot.overall);
  const nextPick = remainingPicks[0] ?? null;

  return (
    <div className="pick-card">
      <div className="pick-header">
        <span className="pick-number">#{slot.overall}</span>
        <span className="team-pill">{team?.name ?? slot.team}</span>
      </div>

      {team?.logo ? (
        <img className="draft-slot-logo" src={team.logo} alt={team.name} />
      ) : null}

      <div className="draft-slot-upcoming-label">Upcoming Picks</div>
      <div className="draft-slot-upcoming-list">
        {remainingPicks.length > 0 ? (
          remainingPicks.map((pickNumber) => (
            <span
              key={pickNumber}
              className={`draft-slot-upcoming-chip ${pickNumber === nextPick ? 'next' : ''}`}
            >
              {pickNumber}
            </span>
          ))
        ) : (
          <span className="subtle">No picks left</span>
        )}
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

      <div className="pick-list">
        {board.map((slot) => (
          <PickItem key={slot.overall} slot={slot} pick={picksByOverall.get(slot.overall)} />
        ))}
      </div>
    </div>
  );
}