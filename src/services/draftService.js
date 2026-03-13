import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { getAllPlayers } from '../services/playerService';

export async function createMockDraft({
  ownerUid,
  username,
  selectedTeam,
  selectedTeams = [],
  rounds,
  year,
  cpuPickSpeedSeconds = 3,
}) {
  if (!ownerUid) {
    throw new Error('Missing ownerUid for draft creation.');
  }

  const normalizedCpuPickSpeedSeconds = cpuPickSpeedSeconds === 1 ? 1 : 3;

  const mockRef = await addDoc(collection(db, 'mocks'), {
    ownerUid,
    username,
    selectedTeam,
    selectedTeams,
    rounds,
    year,
    cpuPickSpeedSeconds: normalizedCpuPickSpeedSeconds,
    currentPickIndex: 0,
    status: 'active',
    picks: [],
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return mockRef.id;
}

export async function deleteMockDraft(mockId, currentUserUid) {
  if (!mockId) {
    throw new Error('Missing mockId.');
  }

  const mockRef = doc(db, 'mocks', mockId);
  const mockSnap = await getDoc(mockRef);

  if (!mockSnap.exists()) {
    throw new Error('Draft not found.');
  }

  const data = mockSnap.data();

  if (!currentUserUid || data.ownerUid !== currentUserUid) {
    throw new Error('You do not have permission to delete this draft.');
  }

  await deleteDoc(mockRef);
}

export async function removeSharedMockFromGroup(groupId, mockId) {
  if (!groupId || !mockId) {
    throw new Error('Missing groupId or mockId.');
  }

  const sharedMockRef = doc(db, 'groups', groupId, 'sharedMocks', mockId);
  await deleteDoc(sharedMockRef);
}

export function listenToMockDraft(mockId, callback) {
  const mockRef = doc(db, 'mocks', mockId);

  return onSnapshot(mockRef, (snapshot) => {
    if (!snapshot.exists()) {
      callback(null);
      return;
    }

    callback({ id: snapshot.id, ...snapshot.data() });
  });
}

export async function getPlayersForYear(year) {
  try {
    const playersRef = collection(db, 'draftClasses', String(year), 'players');
    const playersQuery = query(playersRef, orderBy('overallRank', 'asc'));
    const snapshot = await getDocs(playersQuery);

    if (!snapshot.empty) {
      return snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      }));
    }
  } catch (error) {
    console.warn(
      '[draftService] Firestore draftClasses read failed, falling back to local players.',
      error
    );
  }

  const localPlayers = await getAllPlayers(String(year));

  if (!Array.isArray(localPlayers)) {
    throw new Error('Local player dataset could not be loaded.');
  }

  return localPlayers;
}

export async function makeDraftPick(mockId, currentSlot, player, isAuto = false) {
  const mockRef = doc(db, 'mocks', mockId);

  await runTransaction(db, async (transaction) => {
    const mockSnap = await transaction.get(mockRef);

    if (!mockSnap.exists()) {
      throw new Error('Mock draft not found.');
    }

    const mockData = mockSnap.data();
    const picks = mockData.picks ?? [];
    const alreadyDrafted = new Set(picks.map((pick) => pick.playerId));

    if (alreadyDrafted.has(player.id)) {
      throw new Error('That player has already been drafted.');
    }

    const expectedOverall = picks.length + 1;
    if (currentSlot.overall !== expectedOverall) {
      throw new Error('Draft state is out of sync. Refresh and try again.');
    }

    const playerName = player.fullName || player.name || 'Unknown Player';
    const playerPosition =
      player.position || player.pos || player.primaryPosition || '';
    const playerSchool = player.school || player.college || '';

    const nextPick = {
      overall: currentSlot.overall,
      overallPick: currentSlot.overall,
      round: currentSlot.round,
      pickInRound: currentSlot.pickInRound,
      roundPick: currentSlot.pickInRound,
      team: currentSlot.team,
      playerId: player.id,
      playerName,
      playerPosition,
      position: playerPosition,
      playerSchool,
      school: playerSchool,
      overallRank: player.overallRank ?? null,
      isAuto,
      draftedAt: new Date().toISOString(),
    };

    transaction.update(mockRef, {
      picks: [...picks, nextPick],
      currentPickIndex: expectedOverall,
      updatedAt: serverTimestamp(),
      status: 'active',
    });
  });
}