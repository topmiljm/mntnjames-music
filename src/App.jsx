import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Player from './components/Player';
import { usePlayer } from './hooks/usePlayer';
import HomePage from './pages/HomePage';
import DemosPage from './pages/DemosPage';
import AlbumPage from './pages/AlbumPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
  const player = usePlayer();

  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePage player={player} />} />
          <Route path="/demos" element={<DemosPage />} />
          <Route path="/demos/:slug" element={<AlbumPage player={player} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
      </main>

      <Player
        currentTrack={player.currentTrack}
        currentIndex={player.currentIndex}
        albumTracks={player.albumTracks}
        restartTrack={player.restartTrack}
        goToIndex={player.goToIndex}
      />
    </div>
  );
}
