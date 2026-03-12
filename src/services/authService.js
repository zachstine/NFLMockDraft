import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  serverTimestamp,
  writeBatch,
} from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

function normalizeUsername(username) {
  return username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
}

function usernameToSyntheticEmail(username) {
  return `${normalizeUsername(username)}@mockdraft.local`;
}

export async function signUpWithUsername(username, password) {
  const cleanedUsername = username.trim();
  const normalized = normalizeUsername(cleanedUsername);

  if (normalized.length < 3) {
    throw new Error('Username must be at least 3 valid characters.');
  }

  const usernameRef = doc(db, 'usernames', normalized);
  const usernameSnap = await getDoc(usernameRef);

  if (usernameSnap.exists()) {
    throw new Error('That username is already taken.');
  }

  const syntheticEmail = usernameToSyntheticEmail(cleanedUsername);

  let credentials;
  try {
    credentials = await createUserWithEmailAndPassword(auth, syntheticEmail, password);
  } catch (error) {
    throw new Error(`Auth signup failed: ${error.message}`);
  }

  try {
    const userRef = doc(db, 'users', credentials.user.uid);
    const batch = writeBatch(db);

    const profileData = {
      uid: credentials.user.uid,
      username: cleanedUsername,
      usernameLower: normalized,
      email: syntheticEmail,
      createdAt: serverTimestamp(),
    };

    batch.set(userRef, profileData);
    batch.set(usernameRef, profileData);

    await batch.commit();
    return credentials.user;
  } catch (error) {
    try {
      await deleteUser(credentials.user);
    } catch {
      // ignore cleanup failure
    }
    throw new Error(`Profile creation failed: ${error.message}`);
  }
}

export async function logInWithUsername(username, password) {
  const normalized = normalizeUsername(username);

  if (!normalized) {
    throw new Error('Enter a valid username.');
  }

  const syntheticEmail = usernameToSyntheticEmail(username);
  const credentials = await signInWithEmailAndPassword(auth, syntheticEmail, password);
  return credentials.user;
}

export async function logOutUser() {
  await signOut(auth);
}