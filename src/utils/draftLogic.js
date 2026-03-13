import { TEAM_NEEDS_2026 } from '../data/teamNeeds2026.js';

const POSITION_GROUP_MAP = {
  QB: 'QB',
  RB: 'RB',
  FB: 'RB',
  WR: 'WR',
  TE: 'TE',
  OT: 'OL',
  OG: 'OL',
  C: 'OL',
  EDGE: 'DL',
  DE: 'DL',
  DT: 'DL',
  NT: 'DL',
  LB: 'LB',
  ILB: 'LB',
  OLB: 'LB',
  CB: 'DB',
  S: 'DB',
  FS: 'DB',
  SS: 'DB',
  K: 'ST',
  P: 'ST',
};

function normalizePosition(position) {
  return String(position || '').trim().toUpperCase();
}

function getPositionGroup(position) {
  return POSITION_GROUP_MAP[normalizePosition(position)] || normalizePosition(position);
}

function getNeedBonus(position, teamNeeds) {
  const normalizedPosition = normalizePosition(position);
  const group = getPositionGroup(normalizedPosition);

  const highNeeds = teamNeeds?.high ?? [];
  const mediumNeeds = teamNeeds?.medium ?? [];
  const lowNeeds = teamNeeds?.low ?? [];

  if (highNeeds.includes(normalizedPosition)) return 32;
  if (mediumNeeds.includes(normalizedPosition)) return 18;
  if (lowNeeds.includes(normalizedPosition)) return -8;

  if (highNeeds.includes(group)) return 24;
  if (mediumNeeds.includes(group)) return 12;
  if (lowNeeds.includes(group)) return -6;

  return 0;
}

function getRoundBonus(position, round) {
  const normalizedPosition = normalizePosition(position);

  if (round === 1) {
    if (normalizedPosition === 'QB') return 8;
    if (normalizedPosition === 'OT') return 6;
    if (normalizedPosition === 'EDGE') return 6;
    if (normalizedPosition === 'CB') return 5;
    if (normalizedPosition === 'WR') return 4;
  }

  if (round >= 5) {
    if (normalizedPosition === 'RB') return 3;
    if (normalizedPosition === 'LB') return 2;
    if (normalizedPosition === 'S') return 2;
    if (normalizedPosition === 'K' || normalizedPosition === 'P') return -10;
  }

  if (round <= 3 && (normalizedPosition === 'K' || normalizedPosition === 'P')) {
    return -30;
  }

  return 0;
}

function getDuplicatePositionPenalty(position, teamDraftedPlayers, round) {
  const normalizedPosition = normalizePosition(position);
  const samePositionCount = teamDraftedPlayers.filter(
    (pick) => normalizePosition(pick?.playerPosition || pick?.position) === normalizedPosition
  ).length;

  if (samePositionCount === 0) return 0;

  if (round <= 3) {
    return samePositionCount * -14;
  }

  return samePositionCount * -8;
}

function getDuplicateGroupPenalty(position, teamDraftedPlayers, round) {
  const group = getPositionGroup(position);
  const sameGroupCount = teamDraftedPlayers.filter(
    (pick) => getPositionGroup(pick?.playerPosition || pick?.position) === group
  ).length;

  if (sameGroupCount <= 1) return 0;

  if (round <= 3) {
    return (sameGroupCount - 1) * -7;
  }

  return (sameGroupCount - 1) * -4;
}

function getBaseValue(player) {
  const overallRank = Number(player?.overallRank);

  if (Number.isFinite(overallRank) && overallRank > 0) {
    return 400 - overallRank;
  }

  return 0;
}

function getCpuCandidateScore({
  player,
  teamAbbr,
  currentRound,
  teamDraftedPlayers,
}) {
  const teamNeeds = TEAM_NEEDS_2026[teamAbbr] ?? { high: [], medium: [], low: [] };
  const position = player?.position || player?.pos || player?.primaryPosition || '';

  const baseValue = getBaseValue(player);
  const needBonus = getNeedBonus(position, teamNeeds);
  const roundBonus = getRoundBonus(position, currentRound);
  const duplicatePositionPenalty = getDuplicatePositionPenalty(
    position,
    teamDraftedPlayers,
    currentRound
  );
  const duplicateGroupPenalty = getDuplicateGroupPenalty(
    position,
    teamDraftedPlayers,
    currentRound
  );

  return (
    baseValue +
    needBonus +
    roundBonus +
    duplicatePositionPenalty +
    duplicateGroupPenalty
  );
}

export function getBestCpuPick({
  availablePlayers,
  teamAbbr,
  currentRound,
  allPicks = [],
  topN = 15,
}) {
  if (!Array.isArray(availablePlayers) || availablePlayers.length === 0) {
    return null;
  }

  const candidates = availablePlayers.slice(0, topN);
  const teamDraftedPlayers = allPicks.filter((pick) => pick?.team === teamAbbr);

  let bestPlayer = candidates[0];
  let bestScore = -Infinity;

  for (const player of candidates) {
    const score = getCpuCandidateScore({
      player,
      teamAbbr,
      currentRound,
      teamDraftedPlayers,
    });

    if (score > bestScore) {
      bestScore = score;
      bestPlayer = player;
    }
  }

  return bestPlayer;
}