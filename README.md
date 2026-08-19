# MNTN James Music

A personal music streaming web app for hosting and streaming original demo recordings. Built with React + Vite, styled with a warm indie aesthetic, audio hosted on Cloudinary, and deployed via Vercel.

---

## Tech Stack

- **React** (via Vite) — UI and routing
- **React Router v6** — page navigation
- **Cloudinary** — audio and image hosting/streaming
- **Vercel** — deployment
- **Vanilla CSS** (`App.css`) — all styling, no CSS framework

---

## Project Structure

```
mntn-james-music/
├── public/
│   └── images/              # Album artwork and header images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky top nav with React Router links
│   │   ├── HeroHeader.jsx   # Homepage hero image + title overlay
│   │   ├── AlbumCard.jsx    # Album grid card with art and metadata
│   │   ├── TrackRow.jsx     # Single track row with play/like/duration
│   │   └── Player.jsx       # Sticky bottom audio player
│   ├── hooks/
│   │   └── usePlayer.js     # Track/index state management
│   ├── pages/
│   │   ├── HomePage.jsx     # Hero + latest album with tracklist
│   │   ├── DemosPage.jsx    # Grid of all demo albums
│   │   ├── AlbumPage.jsx    # Single album page with tracklist
│   │   ├── AboutPage.jsx    # Bio and photos
│   │   └── ContactPage.jsx  # Contact form
│   ├── data/
│   │   └── tracks.js        # All album and track data (Cloudinary URLs)
│   ├── App.jsx              # Route definitions
│   ├── App.css              # All styles
│   └── main.jsx             # React entry point with BrowserRouter
├── .env                     # Environment variables (not committed)
├── .gitignore
├── package.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- Node.js (LTS)
- A [Cloudinary](https://cloudinary.com/) account

### Install

```bash
git clone https://github.com/your-username/mntn-james-music.git
cd mntn-james-music
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

> Vite requires the `VITE_` prefix to expose variables to client-side code.

### Run Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Audio & Images

All audio files and album artwork are hosted on Cloudinary.

**Audio URLs** follow this pattern:
```
https://res.cloudinary.com/YOUR_CLOUD/video/upload/q_auto/f_auto/v.../filename.wav
```

**Images** are served from `public/images/` locally. When deploying, they are served as static assets by Vercel.

To add a new track, upload the `.wav` to Cloudinary and add an entry to `src/data/tracks.js`:

```js
{
  id: 99,
  title: 'Song Title',
  album: 'Album Name',
  albumId: 2,           // must match the album's id in const albums
  duration: '3:30',
  durationSecs: 210,
  color: '#7c4e2a',     // fallback color if no coverArt
  coverArt: '/images/album-artwork.png',
  src: `https://res.cloudinary.com/${CLOUD}/video/upload/q_auto/f_auto/v.../filename.wav`,
}
```

To add a new album, add an entry to `const albums` in `tracks.js`:

```js
{
  id: 8,
  slug: 'new-album-demos',   // used in the URL: /demos/new-album-demos
  title: 'New Album Demos',
  year: 2026,
  duration: '35:00',
  color: '#4a3565',
  coverArt: '/images/new-album-artwork.png',
}
```

---

## Deployment (Vercel)

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com/)
3. Add the environment variable in Vercel project settings:
   - `VITE_CLOUDINARY_CLOUD_NAME` = your cloud name
4. Vercel auto-detects Vite — no build config needed
5. Every push to `main` triggers a new deploy

---

## Player Features

- Play / pause with click or **Space / Enter**
- Next / previous track with buttons or **Arrow keys**
- Previous button restarts track if more than 3 seconds in
- Auto-advances to next track on song end
- Seek bar with elapsed / total time
- Clicking the now-playing info navigates to the current album page
- Responsive: stacks to two-row layout on mobile

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero image + latest album tracklist |
| `/demos` | All demo albums grid |
| `/demos/:slug` | Individual album page with tracklist |
| `/about` | Bio and photos |
| `/contact` | Contact form |