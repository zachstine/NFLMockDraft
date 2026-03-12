import { NFL_TEAMS } from './teams';

const baseOrder = NFL_TEAMS.map((team) => team.abbr);

export function buildDraftBoard(totalRounds = 7) {
  const board = [];
  let overall = 1;

  for (let round = 1; round <= totalRounds; round += 1) {
    baseOrder.forEach((team, index) => {
      board.push({
        overall,
        round,
        pickInRound: index + 1,
        team,
      });
      overall += 1;
    });
  }

  return board;
}
