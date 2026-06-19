import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Player from './components/Player';
import { usePlayer } from './hooks/usePlayer';
import HomePage from './pages/HomePage';
import DemosPage from './pages/DemosPage';
import AlbumPage from './pages/AlbumPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const player = usePlayer();

  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage player={player} />} />
          <Route path="/demos" element={<DemosPage player={player} />} />
          <Route path="/demos/:slug" element={<AlbumPage player={player} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Player
        track={player.currentTrack}
        isPlaying={player.isPlaying}
        progress={player.progress}
        currentTime={player.currentTime}
        onToggle={player.toggle}
        onSeek={player.seek}
      />
    </div>
  );
}
