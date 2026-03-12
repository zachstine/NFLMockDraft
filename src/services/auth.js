import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

function usernameToEmail(username) {
  return `${username.toLowerCase().trim()}@draftnow.local`;
}

export async function signupWithUsername(username, password) {
  const email = usernameToEmail(username);
  const cred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", cred.user.uid), {
    uid: cred.user.uid,
    username: username.trim(),
    email,
    createdAt: serverTimestamp(),
  });

  return cred.user;
}

export async function loginWithUsername(username, password) {
  const email = usernameToEmail(username);
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function logoutUser() {
  await signOut(auth);
}

export async function getUserProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}