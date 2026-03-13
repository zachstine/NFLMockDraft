import { useEffect, useMemo, useState } from 'react';
import { NFL_TEAMS } from '../data/teams';
import { getPlayersForYear } from '../services/draftService';

function normalizeTeamKey(teamValue) {
  if (!teamValue) return '';
  return String(teamValue).trim().toUpperCase();
}

function getTeamMeta(teamAbbr) {
  const normalized = normalizeTeamKey(teamAbbr);
  return NFL_TEAMS.find((team) => normalizeTeamKey(team.abbr) === normalized) ?? null;
}

function getPlayerId(pick) {
  return pick?.player?.id || pick?.playerId || null;
}

function getOverall(pick) {
  return pick?.overall ?? pick?.overallPick ?? 9999;
}

function getRound(pick) {
  return pick?.round ?? '—';
}

function getPickInRound(pick) {
  return pick?.pickInRound ?? pick?.roundPick ?? '—';
}

function getPlayerNameFromPick(pick) {
  return (
    pick?.player?.name ||
    pick?.player?.fullName ||
    pick?.playerName ||
    pick?.fullName ||
    pick?.name ||
    ''
  );
}

function getPlayerPositionFromPick(pick) {
  return (
    pick?.player?.position ||
    pick?.playerPosition ||
    pick?.position ||
    pick?.player?.pos ||
    pick?.pos ||
    pick?.player?.primaryPosition ||
    pick?.primaryPosition ||
    pick?.player?.listedPosition ||
    pick?.listedPosition ||
    ''
  );
}

function getPlayerSchoolFromPick(pick) {
  return (
    pick?.player?.school ||
    pick?.playerSchool ||
    pick?.school ||
    pick?.player?.college ||
    pick?.college ||
    ''
  );
}

function mergePickData(primaryPick, fallbackPick, playerLookup) {
  const primaryId = getPlayerId(primaryPick);
  const fallbackId = getPlayerId(fallbackPick);
  const playerId = primaryId || fallbackId || null;

  const playerFromPool = playerLookup.get(playerId);

  const playerName =
    getPlayerNameFromPick(primaryPick) ||
    getPlayerNameFromPick(fallbackPick) ||
    playerFromPool?.fullName ||
    playerFromPool?.name ||
    'Unknown Player';

  const playerPosition =
    getPlayerPositionFromPick(primaryPick) ||
    getPlayerPositionFromPick(fallbackPick) ||
    playerFromPool?.position ||
    playerFromPool?.pos ||
    playerFromPool?.primaryPosition ||
    '';

  const playerSchool =
    getPlayerSchoolFromPick(primaryPick) ||
    getPlayerSchoolFromPick(fallbackPick) ||
    playerFromPool?.school ||
    playerFromPool?.college ||
    '';

  const overall =
    primaryPick?.overall ??
    primaryPick?.overallPick ??
    fallbackPick?.overall ??
    fallbackPick?.overallPick ??
    null;

  const round =
    primaryPick?.round ??
    fallbackPick?.round ??
    null;

  const pickInRound =
    primaryPick?.pickInRound ??
    primaryPick?.roundPick ??
    fallbackPick?.pickInRound ??
    fallbackPick?.roundPick ??
    null;

  const team =
    primaryPick?.team ??
    fallbackPick?.team ??
    '';

  const draftedAt =
    primaryPick?.draftedAt ??
    fallbackPick?.draftedAt ??
    null;

  const isAuto =
    Boolean(primaryPick?.isAuto) || Boolean(fallbackPick?.isAuto);

  return {
    ...fallbackPick,
    ...primaryPick,
    overall,
    overallPick: overall,
    round,
    pickInRound,
    roundPick: pickInRound,
    team,
    playerId,
    playerName,
    playerPosition,
    playerSchool,
    position: playerPosition,
    school: playerSchool,
    draftedAt,
    isAuto,
    player: {
      id: playerId,
      name: playerName,
      position: playerPosition,
      school: playerSchool,
    },
  };
}

function getPlayerName(pick) {
  return getPlayerNameFromPick(pick) || 'Unknown Player';
}

function getPlayerPosition(pick) {
  const rawPosition = getPlayerPositionFromPick(pick);
  return rawPosition ? String(rawPosition).trim().toUpperCase() : '—';
}

function getPlayerSchool(pick) {
  return getPlayerSchoolFromPick(pick) || '—';
}

function buildTeamBuckets(picks) {
  const map = new Map();

  for (const pick of picks) {
    const teamKey = normalizeTeamKey(pick.team);
    if (!teamKey) continue;
    if (!map.has(teamKey)) map.set(teamKey, []);
    map.get(teamKey).push(pick);
  }

  return Array.from(map.entries())
    .map(([team, teamPicks]) => ({
      team,
      picks: [...teamPicks].sort((a, b) => getOverall(a) - getOverall(b)),
    }))
    .sort((a, b) => a.team.localeCompare(b.team));
}

function buildRoundBuckets(picks) {
  const map = new Map();

  for (const pick of picks) {
    const rawRound = getRound(pick);
    const round = Number(rawRound);
    const safeRound = Number.isFinite(round) ? round : 999;

    if (!map.has(safeRound)) map.set(safeRound, []);
    map.get(safeRound).push(pick);
  }

  return Array.from(map.entries())
    .map(([round, roundPicks]) => ({
      round,
      picks: [...roundPicks].sort((a, b) => getOverall(a) - getOverall(b)),
    }))
    .sort((a, b) => a.round - b.round);
}

function buildOverview(picks) {
  const completedPicks = Array.isArray(picks) ? picks.length : 0;

  const positionCounts = new Map();
  for (const pick of picks) {
    const pos = getPlayerPosition(pick);
    positionCounts.set(pos, (positionCounts.get(pos) || 0) + 1);
  }

  const topPositions = Array.from(positionCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  return {
    totalPicks: completedPicks,
    topPositions,
  };
}

function PickRow({ pick }) {
  const teamMeta = getTeamMeta(pick.team);

  return (
    <div className="draft-summary-pick-row">
      <div className="draft-summary-pick-main">
        <div className="draft-summary-pick-line">
          <span className="draft-summary-chip">#{getOverall(pick)}</span>
          <span className="draft-summary-chip">
            R{getRound(pick)}-P{getPickInRound(pick)}
          </span>
          {teamMeta ? (
            <span className="draft-summary-chip">{teamMeta.name}</span>
          ) : (
            <span className="draft-summary-chip">{pick.team || '—'}</span>
          )}
        </div>

        <div className="draft-summary-player-name">
          {getPlayerName(pick)}
        </div>

        <div className="draft-summary-player-meta">
          {getPlayerPosition(pick)} • {getPlayerSchool(pick)}
        </div>
      </div>
    </div>
  );
}

function OverviewTab({ picks }) {
  const overview = useMemo(() => buildOverview(picks), [picks]);

  return (
    <div className="draft-summary-section">
      <div className="draft-summary-overview-grid">
        <div className="draft-summary-stat-card">
          <div className="draft-summary-stat-label">Total Picks</div>
          <div className="draft-summary-stat-value">{overview.totalPicks}</div>
        </div>
      </div>

      <div className="draft-summary-card">
        <h3 className="draft-summary-subheading">Most Drafted Positions</h3>
        {overview.topPositions.length ? (
          <div className="draft-summary-chip-wrap">
            {overview.topPositions.map(([position, count]) => (
              <span key={position} className="draft-summary-chip">
                {position}: {count}
              </span>
            ))}
          </div>
        ) : (
          <div className="draft-summary-empty">No picks available.</div>
        )}
      </div>

      <div className="draft-summary-card">
        <h3 className="draft-summary-subheading">Full Draft Order</h3>
        <div className="draft-summary-list">
          {picks.map((pick, index) => (
            <PickRow
              key={`${getOverall(pick)}-${getPlayerId(pick) || pick?.playerName || index}`}
              pick={pick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ByTeamTab({ picks }) {
  const teamBuckets = useMemo(() => buildTeamBuckets(picks), [picks]);

  return (
    <div className="draft-summary-section">
      {teamBuckets.length ? (
        teamBuckets.map((bucket) => {
          const teamMeta = getTeamMeta(bucket.team);

          return (
            <div key={bucket.team} className="draft-summary-card">
              <h3 className="draft-summary-subheading">
                {teamMeta ? `${teamMeta.city} ${teamMeta.name}` : bucket.team}
              </h3>

              <div className="draft-summary-list">
                {bucket.picks.map((pick, index) => (
                  <PickRow
                    key={`${bucket.team}-${getOverall(pick)}-${index}`}
                    pick={pick}
                  />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div className="draft-summary-empty">No picks available.</div>
      )}
    </div>
  );
}

function ByRoundTab({ picks }) {
  const roundBuckets = useMemo(() => buildRoundBuckets(picks), [picks]);

  return (
    <div className="draft-summary-section">
      {roundBuckets.length ? (
        roundBuckets.map((bucket) => (
          <div key={bucket.round} className="draft-summary-card">
            <h3 className="draft-summary-subheading">Round {bucket.round}</h3>

            <div className="draft-summary-list">
              {bucket.picks.map((pick, index) => (
                <PickRow
                  key={`round-${bucket.round}-${getOverall(pick)}-${index}`}
                  pick={pick}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="draft-summary-empty">No picks available.</div>
      )}
    </div>
  );
}

export default function DraftSummary({
  mock,
  title = 'Draft Summary',
  subtitle = '',
}) {
  const [activeTab, setActiveTab] = useState('overview');
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function loadPlayers() {
      try {
        const loadedPlayers = await getPlayersForYear('2026');
        if (!cancelled) {
          setPlayers(Array.isArray(loadedPlayers) ? loadedPlayers : []);
        }
      } catch {
        if (!cancelled) {
          setPlayers([]);
        }
      }
    }

    loadPlayers();

    return () => {
      cancelled = true;
    };
  }, []);

  const playerLookup = useMemo(() => {
    const map = new Map();
    for (const player of players) {
      if (player?.id) {
        map.set(player.id, player);
      }
    }
    return map;
  }, [players]);

  const picks = useMemo(() => {
    const completedPicks = Array.isArray(mock?.completedPicks) ? mock.completedPicks : [];
    const rawPicks = Array.isArray(mock?.picks) ? mock.picks : [];

    if (!completedPicks.length && !rawPicks.length) {
      return [];
    }

    const fallbackByOverall = new Map();
    const fallbackByPlayerId = new Map();

    for (const pick of rawPicks) {
      const overall = getOverall(pick);
      const playerId = getPlayerId(pick);

      if (overall !== 9999 && !fallbackByOverall.has(overall)) {
        fallbackByOverall.set(overall, pick);
      }

      if (playerId && !fallbackByPlayerId.has(playerId)) {
        fallbackByPlayerId.set(playerId, pick);
      }
    }

    const merged = completedPicks.length
      ? completedPicks.map((pick) => {
          const fallbackPick =
            fallbackByOverall.get(getOverall(pick)) ||
            fallbackByPlayerId.get(getPlayerId(pick)) ||
            null;

          return mergePickData(pick, fallbackPick, playerLookup);
        })
      : rawPicks.map((pick) => mergePickData(pick, null, playerLookup));

    return [...merged].sort((a, b) => getOverall(a) - getOverall(b));
  }, [mock, playerLookup]);

  return (
    <div className="draft-summary-page-shell">
      <div className="draft-summary-header">
        <div>
          <h1 className="draft-summary-heading">{title}</h1>
          {subtitle ? <p className="draft-summary-subtitle">{subtitle}</p> : null}
        </div>

        <div className="draft-summary-status-wrap">
          <span className="draft-summary-status completed">
            {mock?.status === 'completed' ? 'Completed Draft' : 'Saved Draft'}
          </span>
        </div>
      </div>

      <div className="draft-summary-tabs">
        <button
          type="button"
          className={`draft-summary-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>

        <button
          type="button"
          className={`draft-summary-tab ${activeTab === 'team' ? 'active' : ''}`}
          onClick={() => setActiveTab('team')}
        >
          By Team
        </button>

        <button
          type="button"
          className={`draft-summary-tab ${activeTab === 'round' ? 'active' : ''}`}
          onClick={() => setActiveTab('round')}
        >
          By Round
        </button>
      </div>

      {activeTab === 'overview' && <OverviewTab picks={picks} />}
      {activeTab === 'team' && <ByTeamTab picks={picks} />}
      {activeTab === 'round' && <ByRoundTab picks={picks} />}
    </div>
  );
}