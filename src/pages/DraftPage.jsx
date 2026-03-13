import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import TopNav from '../components/TopNav';
import DraftBoard from '../components/DraftBoard';
import PlayerList from '../components/PlayerList';
import { buildDraftBoard } from '../data/draftOrder';
import {
  getPlayersForYear,
  listenToMockDraft,
  makeDraftPick,
} from '../services/draftService';
import { draftCapital2026 } from '../data/draftCapital2026';
import { NFL_TEAMS } from '../data/teams';
import { TEAM_NEEDS_2026 } from '../data/teamNeeds2026';
import { db } from '../lib/firebase';
import { getBestCpuPick } from '../utils/draftLogic';

const POSITION_ORDER = [
  'ALL',
  'QB',
  'RB',
  'WR',
  'TE',
  'OT',
  'OG',
  'C',
  'EDGE',
  'DT',
  'LB',
  'CB',
  'S',
  'K',
  'P',
];

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

function getUpcomingPicks(teamAbbr, currentOverallPick) {
  const allPicks = draftCapital2026[teamAbbr] || [];
  return allPicks.filter((pickNumber) => pickNumber >= currentOverallPick);
}

function getSafePlayerName(player, fallbackPick) {
  return (
    player?.fullName ||
    player?.name ||
    fallbackPick?.playerName ||
    'Unknown Player'
  );
}

function getSafePlayerPosition(player, fallbackPick) {
  return (
    player?.position ||
    player?.pos ||
    player?.primaryPosition ||
    fallbackPick?.playerPosition ||
    fallbackPick?.position ||
    ''
  );
}

function getSafePlayerSchool(player, fallbackPick) {
  return (
    player?.school ||
    player?.college ||
    fallbackPick?.playerSchool ||
    fallbackPick?.school ||
    ''
  );
}

function normalizePosition(position) {
  return String(position || '').trim().toUpperCase();
}

function getPositionGroup(position) {
  return POSITION_GROUP_MAP[normalizePosition(position)] || normalizePosition(position);
}

function getNeedChipStyle(tier, isFilled) {
  if (isFilled) {
    return {
      border: '1px solid rgba(34, 197, 94, 0.9)',
      background: 'rgba(34, 197, 94, 0.18)',
      boxShadow: '0 0 12px rgba(34, 197, 94, 0.45)',
      color: '#dcfce7',
    };
  }

  if (tier === 'high') {
    return {
      border: '1px solid rgba(239, 68, 68, 0.45)',
      background: 'rgba(239, 68, 68, 0.12)',
      color: '#fee2e2',
    };
  }

  if (tier === 'medium') {
    return {
      border: '1px solid rgba(245, 158, 11, 0.45)',
      background: 'rgba(245, 158, 11, 0.12)',
      color: '#fef3c7',
    };
  }

  return {
    border: '1px solid rgba(148, 163, 184, 0.35)',
    background: 'rgba(148, 163, 184, 0.10)',
    color: '#e5e7eb',
  };
}

export default function DraftPage() {
  const { mockId } = useParams();
  const navigate = useNavigate();

  const [mockDraft, setMockDraft] = useState(null);
  const [players, setPlayers] = useState([]);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const [positionFilter, setPositionFilter] = useState('ALL');
  const [search, setSearch] = useState('');
  const [savingPick, setSavingPick] = useState(false);
  const [cpuPickInFlight, setCpuPickInFlight] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);
  const [error, setError] = useState('');
  const [selectedRound, setSelectedRound] = useState('ALL');

  const autoPickInFlightRef = useRef(false);
  const finishInFlightRef = useRef(false);
  const redirectedToSummaryRef = useRef(false);

  useEffect(() => {
    const unsubscribe = listenToMockDraft(mockId, (nextMock) => {
      if (!nextMock) {
        navigate('/');
        return;
      }
      setMockDraft(nextMock);
    });

    return unsubscribe;
  }, [mockId, navigate]);

  useEffect(() => {
    let cancelled = false;

    async function loadPlayers() {
      setLoadingPlayers(true);
      try {
        const loadedPlayers = await getPlayersForYear('2026');
        if (!cancelled) {
          setPlayers(Array.isArray(loadedPlayers) ? loadedPlayers : []);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError.message || 'Failed to load players.');
        }
      } finally {
        if (!cancelled) {
          setLoadingPlayers(false);
        }
      }
    }

    loadPlayers();

    return () => {
      cancelled = true;
    };
  }, []);

  const board = useMemo(() => {
    if (!mockDraft) return [];
    return buildDraftBoard(mockDraft.rounds);
  }, [mockDraft]);

  const playersById = useMemo(() => {
    const map = new Map();
    for (const player of players) {
      if (player?.id) {
        map.set(player.id, player);
      }
    }
    return map;
  }, [players]);

  const draftedPlayerIds = useMemo(() => {
    return new Set((mockDraft?.picks ?? []).map((pick) => pick.playerId));
  }, [mockDraft]);

  const allAvailablePlayers = useMemo(() => {
    return players
      .filter((player) => !draftedPlayerIds.has(player.id))
      .sort((a, b) => a.overallRank - b.overallRank);
  }, [players, draftedPlayerIds]);

  const availablePlayers = useMemo(() => {
    const lowerSearch = search.trim().toLowerCase();

    return allAvailablePlayers
      .filter((player) => positionFilter === 'ALL' || player.position === positionFilter)
      .filter((player) => {
        if (!lowerSearch) return true;

        return (
          player.fullName.toLowerCase().includes(lowerSearch) ||
          player.school.toLowerCase().includes(lowerSearch) ||
          player.position.toLowerCase().includes(lowerSearch)
        );
      });
  }, [allAvailablePlayers, positionFilter, search]);

  const completedPicksCount = mockDraft?.picks?.length ?? 0;
  const totalPicks = board.length;
  const remainingPicks = Math.max(totalPicks - completedPicksCount, 0);
  const isDraftCompleted = mockDraft?.status === 'completed';

  const cpuPickSpeedSeconds = mockDraft?.cpuPickSpeedSeconds === 1 ? 1 : 3;
  const cpuPickDelayMs = cpuPickSpeedSeconds * 1000;
  const cpuDraftMode = mockDraft?.cpuDraftMode === 'bpa' ? 'bpa' : 'logic';

  const currentSlot = isDraftCompleted
    ? null
    : board[mockDraft?.currentPickIndex ?? 0] ?? null;

  const userControlledTeams = useMemo(() => {
    if (!mockDraft) return [];

    if (mockDraft.selectedTeam === 'ALL') {
      return NFL_TEAMS.map((team) => team.abbr);
    }

    if (Array.isArray(mockDraft.selectedTeams) && mockDraft.selectedTeams.length > 0) {
      return mockDraft.selectedTeams;
    }

    if (mockDraft.selectedTeam && mockDraft.selectedTeam !== 'MULTI') {
      return [mockDraft.selectedTeam];
    }

    return [];
  }, [mockDraft]);

  const isUserControlledPick = useMemo(() => {
    if (!currentSlot) return false;
    return userControlledTeams.includes(currentSlot.team);
  }, [currentSlot, userControlledTeams]);

  const canUserPick = useMemo(() => {
    if (!mockDraft || !currentSlot) return false;
    if (isDraftCompleted) return false;
    if (isFinishing) return false;
    return isUserControlledPick;
  }, [mockDraft, currentSlot, isUserControlledPick, isDraftCompleted, isFinishing]);

  const cpuOnClock = useMemo(() => {
    if (!mockDraft || !currentSlot) return false;
    if (loadingPlayers) return false;
    if (isDraftCompleted || isFinishing) return false;
    if (userControlledTeams.length === NFL_TEAMS.length) return false;
    return !isUserControlledPick;
  }, [
    mockDraft,
    currentSlot,
    loadingPlayers,
    userControlledTeams,
    isUserControlledPick,
    isDraftCompleted,
    isFinishing,
  ]);

  const completedPicksForSummary = useMemo(() => {
    const picks = mockDraft?.picks ?? [];

    return [...picks]
      .map((pick, index) => {
        const playerFromPool = playersById.get(pick.playerId);
        const boardSlot =
          board.find((slot) => {
            const slotOverall = slot?.overall ?? null;
            const pickOverall = pick?.overall ?? pick?.overallPick ?? null;
            return slotOverall != null && pickOverall != null && slotOverall === pickOverall;
          }) ?? board[index] ?? null;

        const overall =
          pick?.overall ??
          pick?.overallPick ??
          boardSlot?.overall ??
          null;

        const round =
          pick?.round ??
          boardSlot?.round ??
          null;

        const pickInRound =
          pick?.pickInRound ??
          pick?.roundPick ??
          boardSlot?.pickInRound ??
          null;

        const playerId = pick?.playerId ?? playerFromPool?.id ?? null;
        const playerName = getSafePlayerName(playerFromPool, pick);
        const playerPosition = getSafePlayerPosition(playerFromPool, pick);
        const playerSchool = getSafePlayerSchool(playerFromPool, pick);

        return {
          overall,
          overallPick: overall,
          round,
          pickInRound,
          roundPick: pickInRound,
          team: pick?.team ?? boardSlot?.team ?? '',
          playerId,
          playerName,
          playerPosition,
          playerSchool,
          position: playerPosition,
          school: playerSchool,
          player: {
            id: playerId,
            name: playerName,
            position: playerPosition,
            school: playerSchool,
          },
          draftedAt: pick?.draftedAt ?? null,
          isAuto: Boolean(pick?.isAuto),
        };
      })
      .sort((a, b) => (a.overall ?? 9999) - (b.overall ?? 9999));
  }, [mockDraft, playersById, board]);

  async function finishDraft({ auto = false } = {}) {
    if (!mockDraft || !mockId) return;
    if (finishInFlightRef.current) return;

    if (isDraftCompleted) {
      if (!redirectedToSummaryRef.current) {
        redirectedToSummaryRef.current = true;
        navigate(`/draft/${mockId}/summary`, { replace: true });
      }
      return;
    }

    const picksToSave = completedPicksForSummary;

    if (!picksToSave.length) {
      if (!auto) {
        setError('Make at least one pick before finishing the draft.');
      }
      return;
    }

    finishInFlightRef.current = true;
    autoPickInFlightRef.current = true;
    setCpuPickInFlight(false);
    setIsFinishing(true);
    setError('');

    try {
      await updateDoc(doc(db, 'mocks', mockId), {
        status: 'completed',
        completedAt: serverTimestamp(),
        completedPicks: picksToSave,
        updatedAt: serverTimestamp(),
      });

      redirectedToSummaryRef.current = true;
      navigate(`/draft/${mockId}/summary`, { replace: true });
    } catch (finishError) {
      finishInFlightRef.current = false;
      autoPickInFlightRef.current = false;
      setIsFinishing(false);
      setError(finishError.message || 'Could not finish draft.');
    }
  }

  async function handlePick(player, { isAuto = false } = {}) {
    if (!mockDraft || !currentSlot || !player) return;
    if (isDraftCompleted || isFinishing) return;

    setSavingPick(true);
    setError('');

    try {
      await makeDraftPick(mockId, currentSlot, player, isAuto);
    } catch (pickError) {
      setError(pickError.message || 'Could not save pick.');
      throw pickError;
    } finally {
      setSavingPick(false);
    }
  }

  useEffect(() => {
    if (!mockDraft) return;

    if (mockDraft.status === 'completed' && !redirectedToSummaryRef.current) {
      redirectedToSummaryRef.current = true;
      navigate(`/draft/${mockId}/summary`, { replace: true });
    }
  }, [mockDraft, mockId, navigate]);

  useEffect(() => {
    if (!mockDraft) return;
    if (isDraftCompleted) return;
    if (isFinishing) return;
    if (!totalPicks) return;

    if (completedPicksCount >= totalPicks) {
      finishDraft({ auto: true });
    }
  }, [
    mockDraft,
    completedPicksCount,
    totalPicks,
    isDraftCompleted,
    isFinishing,
    completedPicksForSummary,
  ]);

  useEffect(() => {
    if (!mockDraft || !currentSlot) return;
    if (loadingPlayers) return;
    if (isDraftCompleted || isFinishing) return;
    if (savingPick) return;
    if (autoPickInFlightRef.current) return;
    if (finishInFlightRef.current) return;

    const latestUserControlledTeams =
      mockDraft.selectedTeam === 'ALL'
        ? NFL_TEAMS.map((team) => team.abbr)
        : Array.isArray(mockDraft.selectedTeams) && mockDraft.selectedTeams.length > 0
        ? mockDraft.selectedTeams
        : mockDraft.selectedTeam && mockDraft.selectedTeam !== 'MULTI'
        ? [mockDraft.selectedTeam]
        : [];

    const latestIsUserControlledPick = latestUserControlledTeams.includes(currentSlot.team);
    if (latestIsUserControlledPick) return;

    const cpuPlayer =
      cpuDraftMode === 'bpa'
        ? allAvailablePlayers[0] ?? null
        : getBestCpuPick({
            availablePlayers: allAvailablePlayers,
            teamAbbr: currentSlot.team,
            currentRound: currentSlot.round,
            allPicks: mockDraft?.picks ?? [],
            topN: 15,
          });

    if (!cpuPlayer) return;

    const timeoutId = window.setTimeout(async () => {
      if (autoPickInFlightRef.current) return;
      if (finishInFlightRef.current) return;

      autoPickInFlightRef.current = true;
      setCpuPickInFlight(true);
      setError('');

      try {
        await makeDraftPick(mockId, currentSlot, cpuPlayer, true);
      } catch (pickError) {
        setError(pickError.message || 'Could not auto-pick.');
      } finally {
        autoPickInFlightRef.current = false;
        setCpuPickInFlight(false);
      }
    }, cpuPickDelayMs);

    return () => window.clearTimeout(timeoutId);
  }, [
    mockDraft,
    currentSlot,
    allAvailablePlayers,
    loadingPlayers,
    savingPick,
    isDraftCompleted,
    isFinishing,
    mockId,
    cpuPickDelayMs,
    cpuDraftMode,
  ]);

  const positionOptions = POSITION_ORDER.filter(
    (position) => position === 'ALL' || players.some((player) => player.position === position)
  );

  const activeTeamAbbr = currentSlot?.team ?? null;
  const activeTeam = NFL_TEAMS.find((team) => team.abbr === activeTeamAbbr) ?? null;

  const activeTeamNeeds = activeTeamAbbr ? TEAM_NEEDS_2026?.[activeTeamAbbr] ?? null : null;

  const draftedNeedSet = useMemo(() => {
    const set = new Set();

    for (const pick of mockDraft?.picks ?? []) {
      if (pick?.team !== activeTeamAbbr) continue;

      const position = normalizePosition(pick?.playerPosition || pick?.position);
      if (!position) continue;

      set.add(position);
      set.add(getPositionGroup(position));
    }

    return set;
  }, [mockDraft?.picks, activeTeamAbbr]);

  const upcomingPicks =
    activeTeamAbbr && currentSlot
      ? getUpcomingPicks(activeTeamAbbr, currentSlot.overall)
      : [];

  const nextUpcomingPick = upcomingPicks[0] ?? null;

  if (!mockDraft) {
    return <div className="loading-screen">Loading draft...</div>;
  }

  return (
    <div className="app-shell">
      <div className="page">
        <TopNav />

        <div className="draft-top-banner panel">
          <div className="draft-top-banner-left">
            <div className="draft-top-banner-title">
              {userControlledTeams.length === NFL_TEAMS.length
                ? 'User-controlled full draft'
                : `${userControlledTeams.length} user-controlled team${
                    userControlledTeams.length === 1 ? '' : 's'
                  } | CPU ${cpuDraftMode === 'bpa' ? 'Pure BPA' : 'Draft Logic'} for others`}
            </div>
          </div>

          <div className="draft-top-banner-right">
            <span className="badge">Completed: {completedPicksCount}</span>
            <span className="badge">Remaining: {remainingPicks}</span>
            <span className="badge">Rounds: {mockDraft.rounds}</span>
            <span className="badge">CPU Speed: {cpuPickSpeedSeconds}s</span>
            <span className="badge">CPU Mode: {cpuDraftMode === 'bpa' ? 'Pure BPA' : 'Draft Logic'}</span>
            <button
              type="button"
              className="primary-button"
              onClick={() => finishDraft({ auto: false })}
              disabled={isFinishing || savingPick || cpuPickInFlight || completedPicksCount === 0}
            >
              {isFinishing ? 'Finishing...' : 'Finish Draft'}
            </button>
          </div>
        </div>

        <div className="draft-layout">
          <DraftBoard
            board={board}
            picks={mockDraft.picks ?? []}
            currentOverallPick={currentSlot?.overall ?? null}
            selectedRound={selectedRound}
            onRoundChange={setSelectedRound}
          />

          <div>
            <div className="panel" style={{ marginBottom: '18px' }}>
              <div className="toolbar">
                <div className="toolbar-top">
                  <input
                    className="search-input"
                    placeholder="Search player, school, or position"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    disabled={isDraftCompleted || isFinishing}
                  />
                </div>

                <div
                  className="filter-row"
                  style={{ alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}
                >
                  <div className="field" style={{ minWidth: '200px', margin: 0 }}>
                    <label htmlFor="position-filter">Position</label>
                    <select
                      id="position-filter"
                      value={positionFilter}
                      onChange={(event) => setPositionFilter(event.target.value)}
                      disabled={isDraftCompleted || isFinishing}
                    >
                      {positionOptions.map((option) => (
                        <option key={option} value={option}>
                          {option === 'ALL' ? 'All positions' : option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {!isDraftCompleted && activeTeamNeeds && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        minWidth: '280px',
                        flex: 1,
                      }}
                    >
                      <div className="subtle" style={{ lineHeight: 1.2 }}>
                        {activeTeam?.name} needs
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '8px',
                        }}
                      >
                        {['high', 'medium', 'low'].flatMap((tier) =>
                          Array.isArray(activeTeamNeeds?.[tier])
                            ? activeTeamNeeds[tier].map((need) => {
                                const normalizedNeed = normalizePosition(need);
                                const isFilled = draftedNeedSet.has(normalizedNeed);

                                return (
                                  <span
                                    key={`${tier}-${normalizedNeed}`}
                                    style={{
                                      ...getNeedChipStyle(tier, isFilled),
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '6px',
                                      padding: '6px 10px',
                                      borderRadius: '999px',
                                      fontSize: '0.82rem',
                                      fontWeight: 600,
                                      whiteSpace: 'nowrap',
                                      transition:
                                        'background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                                    }}
                                    title={
                                      isFilled
                                        ? `${need} already drafted for ${activeTeam?.name}`
                                        : `${tier} need`
                                    }
                                  >
                                    <span
                                      style={{
                                        opacity: 0.8,
                                        fontSize: '0.72rem',
                                        textTransform: 'uppercase',
                                      }}
                                    >
                                      {tier === 'high' ? 'H' : tier === 'medium' ? 'M' : 'L'}
                                    </span>
                                    <span>{need}</span>
                                    {isFilled ? <span style={{ fontSize: '0.78rem' }}>✓</span> : null}
                                  </span>
                                );
                              })
                            : []
                        )}
                      </div>
                    </div>
                  )}

                  <div className="inline-row" style={{ marginLeft: 'auto', flexWrap: 'wrap' }}>
                    {savingPick && <span className="subtle">Saving pick...</span>}

                    {isFinishing && <span className="subtle">Finalizing draft...</span>}

                    {!isDraftCompleted && isUserControlledPick && currentSlot && (
                      <span className="subtle">
                        Your pick: {currentSlot.team}
                      </span>
                    )}

                    {!isDraftCompleted && cpuOnClock && (
                      <span className="subtle">
                        {cpuPickInFlight
                          ? `Auto-picking for ${currentSlot?.team}...`
                          : `${currentSlot?.team} on the clock... (${cpuPickSpeedSeconds}s | ${cpuDraftMode === 'bpa' ? 'Pure BPA' : 'Draft Logic'})`}
                      </span>
                    )}
                  </div>
                </div>

                {error && <div className="error-text">{error}</div>}
              </div>
            </div>

            <PlayerList
              players={availablePlayers}
              currentSlot={currentSlot}
              canUserPick={canUserPick && !savingPick && !cpuPickInFlight && !isFinishing}
              onPick={handlePick}
              loading={loadingPlayers}
              activeTeam={activeTeam}
              upcomingPicks={upcomingPicks}
              nextUpcomingPick={nextUpcomingPick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}