import { TEAM_NEEDS_2026 } from '../data/teamNeeds2026';

const POSITION_GROUP_MAP = {
  QB: 'QB',
  RB: 'RB',
  FB: 'RB',
  WR: 'WR',
  TE: 'TE',
  OT: 'OL',
  T: 'OL',
  OG: 'OL',
  G: 'OL',
  C: 'OL',
  IOL: 'OL',
  OL: 'OL',
  EDGE: 'DL',
  DE: 'DL',
  DT: 'DL',
  NT: 'DL',
  DL: 'DL',
  LB: 'LB',
  ILB: 'LB',
  OLB: 'LB',
  CB: 'DB',
  S: 'DB',
  SAF: 'DB',
  FS: 'DB',
  SS: 'DB',
  DB: 'DB',
  K: 'ST',
  P: 'ST',
  ST: 'ST',
};

function normalizePosition(position) {
  return String(position || '').trim().toUpperCase();
}

function getPositionGroup(position) {
  return POSITION_GROUP_MAP[normalizePosition(position)] || normalizePosition(position);
}

function getBaseValue(player) {
  const overallRank = Number(player?.overallRank);
  if (Number.isFinite(overallRank) && overallRank > 0) {
    return 500 - overallRank;
  }
  return 0;
}

function listHasPosition(list = [], position) {
  const normalizedPosition = normalizePosition(position);
  const group = getPositionGroup(normalizedPosition);

  return list.some((item) => {
    const normalizedItem = normalizePosition(item);
    return normalizedItem === normalizedPosition || normalizedItem === group;
  });
}

function getNeedBonus(position, teamNeeds) {
  if (listHasPosition(teamNeeds?.high, position)) return 26;
  if (listHasPosition(teamNeeds?.medium, position)) return 14;
  if (listHasPosition(teamNeeds?.low, position)) return -8;
  return 0;
}

function getRecentlyAddressedPenalty(position, teamNeeds, currentRound) {
  if (!listHasPosition(teamNeeds?.recentlyAddressed, position)) return 0;

  if (currentRound <= 2) return -22;
  if (currentRound === 3) return -14;
  return -8;
}

function getAvoidEarlyPenalty(position, teamNeeds, currentRound) {
  if (!listHasPosition(teamNeeds?.avoidEarly, position)) return 0;

  if (currentRound <= 2) return -55;
  if (currentRound === 3) return -30;
  return -10;
}

function getQuarterbackPlanPenalty(position, teamNeeds, currentRound) {
  const normalizedPosition = normalizePosition(position);
  if (normalizedPosition !== 'QB') return 0;

  const qbPlan = teamNeeds?.qbPlan ?? 'set';

  if (qbPlan === 'need') return currentRound === 1 ? 8 : 0;
  if (qbPlan === 'bridge') {
    if (currentRound === 1) return -8;
    if (currentRound <= 3) return -2;
    return 4;
  }
  if (qbPlan === 'developing') {
    if (currentRound <= 2) return -65;
    if (currentRound === 3) return -28;
    return -8;
  }
  // qbPlan === 'set'
  if (currentRound <= 2) return -90;
  if (currentRound <= 4) return -40;
  return -14;
}

function getRoundValueAdjustment(position, currentRound) {
  const normalizedPosition = normalizePosition(position);

  if (currentRound <= 2) {
    if (normalizedPosition === 'QB') return 6;
    if (normalizedPosition === 'OT') return 5;
    if (normalizedPosition === 'EDGE') return 5;
    if (normalizedPosition === 'CB') return 4;
    if (normalizedPosition === 'WR') return 3;
    if (normalizedPosition === 'K' || normalizedPosition === 'P') return -45;
  }

  if (currentRound === 3 || currentRound === 4) {
    if (normalizedPosition === 'K' || normalizedPosition === 'P') return -18;
  }

  if (currentRound >= 5) {
    if (normalizedPosition === 'RB') return 3;
    if (normalizedPosition === 'LB') return 2;
    if (normalizedPosition === 'S') return 2;
  }

  return 0;
}

function getTeamDraftedPlayers(allPicks, teamAbbr) {
  return (allPicks ?? []).filter((pick) => pick?.team === teamAbbr);
}

function getDuplicatePositionPenalty(position, teamDraftedPlayers, currentRound) {
  const normalizedPosition = normalizePosition(position);

  const samePositionCount = teamDraftedPlayers.filter(
    (pick) => normalizePosition(pick?.playerPosition || pick?.position) === normalizedPosition
  ).length;

  if (samePositionCount === 0) return 0;
  if (currentRound <= 3) return samePositionCount * -16;
  return samePositionCount * -9;
}

function getDuplicateGroupPenalty(position, teamDraftedPlayers, currentRound) {
  const positionGroup = getPositionGroup(position);

  const sameGroupCount = teamDraftedPlayers.filter(
    (pick) => getPositionGroup(pick?.playerPosition || pick?.position) === positionGroup
  ).length;

  if (sameGroupCount <= 1) return 0;
  if (currentRound <= 3) return (sameGroupCount - 1) * -8;
  return (sameGroupCount - 1) * -4;
}

function getCpuCandidateScore({ player, teamAbbr, currentRound, allPicks }) {
  const teamNeeds = TEAM_NEEDS_2026[teamAbbr] ?? {
    high: [],
    medium: [],
    low: [],
    recentlyAddressed: [],
    avoidEarly: [],
    qbPlan: 'set',
  };

  const teamDraftedPlayers = getTeamDraftedPlayers(allPicks, teamAbbr);
  const position = player?.position || player?.pos || player?.primaryPosition || '';

  return (
    getBaseValue(player) +
    getNeedBonus(position, teamNeeds) +
    getRecentlyAddressedPenalty(position, teamNeeds, currentRound) +
    getAvoidEarlyPenalty(position, teamNeeds, currentRound) +
    getQuarterbackPlanPenalty(position, teamNeeds, currentRound) +
    getRoundValueAdjustment(position, currentRound) +
    getDuplicatePositionPenalty(position, teamDraftedPlayers, currentRound) +
    getDuplicateGroupPenalty(position, teamDraftedPlayers, currentRound)
  );
}

export function getBestCpuPick({
  availablePlayers,
  teamAbbr,
  currentRound,
  allPicks = [],
  topN = 18,
}) {
  if (!Array.isArray(availablePlayers) || availablePlayers.length === 0) {
    return null;
  }

  const candidates = availablePlayers.slice(0, topN);

  let bestPlayer = null;
  let bestScore = -Infinity;

  for (const player of candidates) {
    const score = getCpuCandidateScore({
      player,
      teamAbbr,
      currentRound,
      allPicks,
    });

    if (score > bestScore) {
      bestScore = score;
      bestPlayer = player;
    }
  }

  return bestPlayer ?? availablePlayers[0] ?? null;
}
