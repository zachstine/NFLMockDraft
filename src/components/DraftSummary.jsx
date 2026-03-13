import { useMemo, useState } from 'react';
import { NFL_TEAMS } from '../data/teams';

function normalizeTeamKey(teamValue) {
  if (!teamValue) return '';
  return String(teamValue).trim().toUpperCase();
}

function getTeamMeta(teamAbbr) {
  const normalized = normalizeTeamKey(teamAbbr);
  return NFL_TEAMS.find((team) => normalizeTeamKey(team.abbr) === normalized) ?? null;
}

function getPlayerName(pick) {
  return (
    pick?.player?.name ||
    pick?.playerName ||
    pick?.name ||
    'Unknown Player'
  );
}

function getPlayerPosition(pick) {
  return (
    pick?.player?.position ||
    pick?.playerPosition ||
    pick?.position ||
    pick?.player?.pos ||
    pick?.pos ||
    '—'
  );
}

function getPlayerSchool(pick) {
  return (
    pick?.player?.school ||
    pick?.playerSchool ||
    pick?.school ||
    pick?.player?.college ||
    pick?.college ||
    '—'
  );
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
    const round = Number(getRound(pick));
    if (!map.has(round)) map.set(round, []);
    map.get(round).push(pick);
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
              key={`${getOverall(pick)}-${pick?.player?.id || pick?.playerId || pick?.playerName || index}`}
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

  const picks = useMemo(() => {
    const source = Array.isArray(mock?.completedPicks)
      ? mock.completedPicks
      : Array.isArray(mock?.picks)
      ? mock.picks
      : [];

    return [...source].sort((a, b) => getOverall(a) - getOverall(b));
  }, [mock]);

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