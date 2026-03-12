# NFL Mock Draft Website Starter

A React + Vite + Firebase starter scaffold for an NFL mock draft app.

## What is included

- Username/password-style login built on top of Firebase email/password using a synthetic email convention
- Protected routes
- Home page with team selector, round selector, and start button
- Draft room with:
  - left-side pick history
  - right-side available player list
  - position filter
  - search
- Firestore-backed saved mock drafts
- Sample player fallback so the interface works before you import a real draft class

## Stack

- React + Vite
- Firebase Authentication
- Cloud Firestore
- Firebase Hosting

## Important auth note

Firebase web auth does not natively support pure username/password sign-in. This scaffold emulates it by converting the username to a synthetic email like:

```text
username@mockdraft.local
```

That means the app only asks the user for a username and password, but Firebase still gets a valid email/password under the hood.

## Quick start

1. Create a Firebase project.
2. Enable **Authentication > Email/Password** in Firebase.
3. Create a Firestore database.
4. Copy `.env.example` to `.env` and add your Firebase config values.
5. Install dependencies:

```bash
npm install
```

6. Run the dev server:

```bash
npm run dev
```

## Firestore structure

```text
users/{uid}
usernames/{usernameLower}
draftClasses/{year}/players/{playerId}
mocks/{mockId}
```

## Loading real prospects later

For now, the UI falls back to a sample in-app player list if Firestore is empty.

Later, you can populate:

```text
draftClasses/2026/players/*
```

Each player document should look roughly like this:

```json
{
  "fullName": "Cam Ward",
  "position": "QB",
  "school": "Miami",
  "overallRank": 1,
  "teamRank": 1,
  "source": "manual"
}
```

## Draft behavior in this starter

- If the user selects **All Teams**, they manually make every pick.
- If the user selects **one team**, the app auto-picks best available player for all other teams.
- Auto-picks use a simple BPA rule based on `overallRank`.

## Suggested next upgrades

- Team needs / scheme fit weighting
- Trade logic
- Saved draft history page
- Admin import page for player data
- Real draft order by year
- CPU logic by position value and team needs

## Deploy to Firebase Hosting

Install Firebase CLI if you have not already, then:

```bash
firebase login
firebase init
npm run build
firebase deploy
```

When `firebase init` asks about Hosting, use `dist` as the public directory and configure as a single-page app.
