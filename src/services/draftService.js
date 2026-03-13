import {
  addDoc,
  collection,
  doc,
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
}) {
  if (!ownerUid) {
    throw new Error('Missing ownerUid for draft creation.');
  }

  const mockRef = await addDoc(collection(db, 'mocks'), {
    ownerUid,
    username,
    selectedTeam,
    selectedTeams,
    rounds,
    year,
    currentPickIndex: 0,
    status: 'active',
    picks: [],
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return mockRef.id;
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
  const playersRef = collection(db, 'draftClasses', year, 'players');
  const playersQuery = query(playersRef, orderBy('overallRank', 'asc'));
  const snapshot = await getDocs(playersQuery);

  if (snapshot.empty) {
    return getAllPlayers;
  }

  return snapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
  }));
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

    const nextPick = {
      overallPick: currentSlot.overall,
      round: currentSlot.round,
      pickInRound: currentSlot.pickInRound,
      team: currentSlot.team,
      playerId: player.id,
      playerName: player.fullName,
      position: player.position,
      school: player.school,
      overallRank: player.overallRank,
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