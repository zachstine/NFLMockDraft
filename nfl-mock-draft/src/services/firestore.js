import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export async function createMockDraft({
  ownerUid,
  year = 2026,
  selectedTeams = [],
  rounds = [1],
  status = "active",
}) {
  const ref = await addDoc(collection(db, "mocks"), {
    ownerUid,
    year,
    selectedTeams,
    rounds,
    currentPick: 1,
    status,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return ref.id;
}

export async function getMockDraft(mockId) {
  const snap = await getDoc(doc(db, "mocks", mockId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function savePick(mockId, pick) {
  const pickRef = doc(db, "mocks", mockId, "picks", String(pick.overallPick));

  await setDoc(pickRef, {
    ...pick,
    createdAt: serverTimestamp(),
  });

  await setDoc(
    doc(db, "mocks", mockId),
    {
      currentPick: pick.overallPick + 1,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

export async function getPicks(mockId) {
  const picksRef = collection(db, "mocks", mockId, "picks");
  const q = query(picksRef, orderBy("overallPick", "asc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getUserMocks(uid) {
  const q = query(collection(db, "mocks"), where("ownerUid", "==", uid));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getPlayersByYear(year = 2026) {
  const playersRef = collection(db, "draftClasses", String(year), "players");
  const snap = await getDocs(playersRef);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}