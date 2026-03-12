import { draftCapital2026 } from './draftCapital2026';

const ROUND_ENDS = [32, 64, 100, 136, 176, 219, 257];

function getRoundFromOverall(overall) {
  for (let i = 0; i < ROUND_ENDS.length; i += 1) {
    if (overall <= ROUND_ENDS[i]) {
      return i + 1;
    }
  }
  return 7;
}

function getRoundStart(round) {
  return round === 1 ? 1 : ROUND_ENDS[round - 2] + 1;
}

export function buildDraftBoard(totalRounds = 7) {
  const allSlots = Object.entries(draftCapital2026)
    .flatMap(([team, picks]) =>
      picks.map((overall) => ({
        overall,
        round: getRoundFromOverall(overall),
        team,
      }))
    )
    .sort((a, b) => a.overall - b.overall)
    .map((slot) => ({
      ...slot,
      pickInRound: slot.overall - getRoundStart(slot.round) + 1,
    }));

  return allSlots.filter((slot) => slot.round <= totalRounds);
}