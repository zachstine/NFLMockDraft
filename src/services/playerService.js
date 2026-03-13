import rawPlayers from '../data/players/players2026.json';

const POSITION_MAP = {
  LT: 'OT',
  RT: 'OT',
  T: 'OT',
  OT: 'OT',

  G: 'IOL',
  OG: 'IOL',
  LG: 'IOL',
  RG: 'IOL',
  C: 'IOL',
  IOL: 'IOL',

  DE: 'EDGE',
  OLB: 'EDGE',
  EDGE: 'EDGE',

  DT: 'DL',
  NT: 'DL',
  IDL: 'DL',
  DL: 'DL',

  ILB: 'LB',
  MLB: 'LB',
  LB: 'LB',

  CB: 'CB',
  S: 'S',
  FS: 'S',
  SS: 'S',

  QB: 'QB',
  RB: 'RB',
  WR: 'WR',
  TE: 'TE',
  K: 'K',
  P: 'P'
};

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/\./g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function normalizePosition(position) {
  const raw = String(position || '').toUpperCase().trim();
  return POSITION_MAP[raw] || raw;
}

function normalizeNumber(value, fallback = null) {
  if (value === '' || value == null) return fallback;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? fallback : parsed;
}

function computeFallbackValue(player) {
  const rank = normalizeNumber(player.overallRank, 999);
  return Math.max(1, 10001 - rank * 35);
}

function normalizeTags(tags) {
  if (!Array.isArray(tags)) return [];
  return tags.map((tag) => String(tag).trim()).filter(Boolean);
}

function normalizePlayer(player, index) {
  const fullName = String(player.fullName || '').trim();
  const normalizedPosition = normalizePosition(player.position);

  return {
    id:
      player.id ||
      `2026-${slugify(fullName)}-${slugify(normalizedPosition) || index + 1}`,
    fullName,
    firstName: fullName.split(' ')[0] || '',
    lastName: fullName.split(' ').slice(1).join(' ') || '',
    position: normalizedPosition,
    school: String(player.school || '').trim(),
    overallRank: normalizeNumber(player.overallRank, 999),
    positionRank: normalizeNumber(player.positionRank, null),
    grade: normalizeNumber(player.grade, null),
    value:
      normalizeNumber(player.value, null) ?? computeFallbackValue(player),
    height: player.height ? String(player.height).trim() : null,
    weight: normalizeNumber(player.weight, null),
    classYear: player.classYear ? String(player.classYear).trim() : null,
    age: normalizeNumber(player.age, null),
    archetype: player.archetype ? String(player.archetype).trim() : null,
    tags: normalizeTags(player.tags),
    source: player.source ? String(player.source).trim() : 'local-json',
    isActive: player.isActive !== false
  };
}

const ALL_PLAYERS = rawPlayers
  .map((player, index) => normalizePlayer(player, index))
  .filter((player) => player.isActive)
  .sort((a, b) => {
    if (b.value !== a.value) return b.value - a.value;
    if (a.overallRank !== b.overallRank) return a.overallRank - b.overallRank;
    return a.fullName.localeCompare(b.fullName);
  });

export function getAllPlayers() {
  return ALL_PLAYERS;
}

export function getPlayerById(playerId) {
  return ALL_PLAYERS.find((player) => player.id === playerId) ?? null;
}

export function buildPlayerLookup(players = ALL_PLAYERS) {
  return Object.fromEntries(players.map((player) => [player.id, player]));
}

export function sortPlayersByBPA(players) {
  return [...players].sort((a, b) => {
    if (b.value !== a.value) return b.value - a.value;
    if (a.overallRank !== b.overallRank) return a.overallRank - b.overallRank;
    return a.fullName.localeCompare(b.fullName);
  });
}

export function filterPlayersByPosition(players, position) {
  if (!position || position === 'ALL') return players;
  return players.filter((player) => player.position === position);
}

export function filterPlayersBySearch(players, searchTerm) {
  const query = String(searchTerm || '').trim().toLowerCase();
  if (!query) return players;

  return players.filter((player) => {
    return (
      player.fullName.toLowerCase().includes(query) ||
      player.school.toLowerCase().includes(query) ||
      player.position.toLowerCase().includes(query)
    );
  });
}

export function getDraftedPlayerIds(picks = []) {
  return new Set(
    picks
      .map((pick) => pick.playerId)
      .filter(Boolean)
  );
}

export function getAvailablePlayers(allPlayers = ALL_PLAYERS, picks = []) {
  const draftedPlayerIds = getDraftedPlayerIds(picks);
  return allPlayers.filter((player) => !draftedPlayerIds.has(player.id));
}

export function getBestAvailablePlayer(allPlayers = ALL_PLAYERS, picks = []) {
  const availablePlayers = getAvailablePlayers(allPlayers, picks);
  return availablePlayers[0] ?? null;
}

export function createPickSnapshot(player) {
  if (!player) return null;

  return {
    playerId: player.id,
    playerName: player.fullName,
    position: player.position,
    school: player.school,
    value: player.value,
    overallRank: player.overallRank
  };
}