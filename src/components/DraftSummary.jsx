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

function formatPosition(player) {
  return player?.position || player?.pos || '—';
}

function formatSchool(player) {
  return player?.school || player?.college || '—';
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
      picks: [...teamPicks].sort((a, b) => (a.overall ?? 9999) - (b.overall ?? 9999)),
    }))
    .sort((a, b) => a.team.localeCompare(b.team));
}

function buildRoundBuckets(picks) {
  const map = new Map();

  for (const pick of picks) {
    const round = Number(pick.round ?? 0);
    if (!map.has(round)) map.set(round, []);
    map.get(round).push(pick);
  }

  return Array.from(map.entries())
    .map(([round, roundPicks]) => ({
      round,
      picks: [...roundPicks].sort((a, b) => (a.overall ?? 9999) - (b.overall ?? 9999)),
    }))
    .sort((a, b) => a.round - b.round);
}

function buildOverview(picks) {
  const completedPicks = Array.isArray(picks) ? picks.length : 0;

  const positionCounts = new Map();
  for (const pick of picks) {
    const pos = formatPosition(pick.player);
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
  const player = pick.player || {};
  const teamMeta = getTeamMeta(pick.team);

  return (
    <div className="draft-summary-pick-row">
      <div className="draft-summary-pick-main">
        <div className="draft-summary-pick-line">
          <span className="draft-summary-chip">#{pick.overall}</span>
          <span className="draft-summary-chip">R{pick.round}-P{pick.pickInRound}</span>
          {teamMeta ? (
            <span className="draft-summary-chip">{teamMeta.name}</span>
          ) : (
            <span className="draft-summary-chip">{pick.team}</span>
          )}
        </div>

        <div className="draft-summary-player-name">
          {player.name || 'Unknown Player'}
        </div>

        <div className="draft-summary-player-meta">
          {formatPosition(player)} • {formatSchool(player)}
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
          {picks.map((pick) => (
            <PickRow key={`${pick.overall}-${pick.player?.id || pick.player?.name || 'pick'}`} pick={pick} />
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
                {bucket.picks.map((pick) => (
                  <PickRow key={`${bucket.team}-${pick.overall}`} pick={pick} />
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
              {bucket.picks.map((pick) => (
                <PickRow key={`round-${bucket.round}-${pick.overall}`} pick={pick} />
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

    return [...source].sort((a, b) => (a.overall ?? 9999) - (b.overall ?? 9999));
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