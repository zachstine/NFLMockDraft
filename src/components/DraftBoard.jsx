import { useEffect, useMemo, useRef } from 'react';
import { NFL_TEAMS } from '../data/teams';
import { draftCapital2026 } from '../data/draftCapital2026';

function getTeamByAbbr(abbr) {
  return NFL_TEAMS.find((team) => team.abbr === abbr) ?? null;
}

function getRemainingTeamPicks(teamAbbr, currentOverallPick) {
  return (draftCapital2026[teamAbbr] || []).filter((pick) => pick >= currentOverallPick);
}

function PickItem({ slot, pick, isCurrent }) {
  const team = getTeamByAbbr(slot.team);
  const remainingPicks = getRemainingTeamPicks(slot.team, slot.overall);
  const nextPick = remainingPicks[0] ?? null;

  return (
    <div
      className={`pick-card ${isCurrent ? 'current-pick-card' : ''}`}
      data-pick-overall={slot.overall}
    >
      <div className="pick-header">
        <span className="pick-number">#{slot.overall}</span>
        <span className="team-pill">{team?.mascot ?? team?.name ?? slot.team}</span>
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

export default function DraftBoard({
  board,
  picks,
  currentOverallPick,
  selectedRound,
  onRoundChange,
}) {
  const picksByOverall = useMemo(
    () => new Map(picks.map((pick) => [pick.overallPick, pick])),
    [picks]
  );

  const scrollPanelRef = useRef(null);

  const availableRounds = useMemo(
    () => [...new Set(board.map((slot) => slot.round))],
    [board]
  );

  const visibleBoard = useMemo(() => {
    return selectedRound === 'ALL'
      ? board
      : board.filter((slot) => slot.round === Number(selectedRound));
  }, [board, selectedRound]);

  useEffect(() => {
    const panel = scrollPanelRef.current;
    if (!panel || !currentOverallPick) return;

    const target = panel.querySelector(
      `[data-pick-overall="${currentOverallPick}"]`
    );

    if (!target) return;

    const panelRect = panel.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const targetTopWithinPanel =
      targetRect.top - panelRect.top + panel.scrollTop;

    const targetScrollTop =
      targetTopWithinPanel - panel.clientHeight / 2 + targetRect.height / 2;

    panel.scrollTo({
      top: Math.max(0, targetScrollTop),
      behavior: 'smooth',
    });
  }, [currentOverallPick, selectedRound, visibleBoard]);

  return (
    <div className="panel scroll-panel">
      <div className="draft-board-header">
        <h3>Draft Board</h3>

        <div className="round-filter-row">
          <button
            type="button"
            className={`round-filter-btn ${selectedRound === 'ALL' ? 'active' : ''}`}
            onClick={() => onRoundChange('ALL')}
          >
            All Rounds
          </button>

          {availableRounds.map((round) => (
            <button
              type="button"
              key={round}
              className={`round-filter-btn ${selectedRound === round ? 'active' : ''}`}
              onClick={() => onRoundChange(round)}
            >
              Round {round}
            </button>
          ))}
        </div>
      </div>

      <div className="pick-list" ref={scrollPanelRef}>
        {visibleBoard.map((slot) => (
          <PickItem
            key={slot.overall}
            slot={slot}
            pick={picksByOverall.get(slot.overall)}
            isCurrent={slot.overall === currentOverallPick}
          />
        ))}
      </div>
    </div>
  );
}