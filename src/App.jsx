import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroHeader from './components/HeroHeader';
import AlbumCard from './components/AlbumCard';
import TrackRow from './components/TrackRow';
import Player from './components/Player';
import { usePlayer } from './hooks/usePlayer';
import { albums, tracks } from './data/tracks';

export default function App() {
  const [page, setPage] = useState('Home');
  const { currentTrack, isPlaying, progress, currentTime, toggle, seek } = usePlayer();

  const tracksByAlbum = (albumTitle) =>
    tracks.filter((t) => t.album === albumTitle);

  return (
    <div className="app">
      <Navbar activePage={page} onNavigate={setPage} />

      <main className="main">
        {page === 'Home' && (
          <>
            <HeroHeader onBrowse={() => setPage('Albums')} />

            <div className="page-content">
              <div className="section-label">
                Albums
                <div className="section-divider" />
              </div>

              <div className="album-grid">
                {albums.map((album) => (
                  <AlbumCard
                    key={album.id}
                    album={album}
                    trackCount={tracksByAlbum(album.title).length}
                    onClick={() => setPage('Albums')}
                  />
                ))}
              </div>

              <div className="section-label">
                Latest — Dusk &amp; Timber
                <div className="section-divider" />
              </div>

              <div className="track-list">
                {tracksByAlbum('Dusk & Timber').map((track, i) => (
                  <TrackRow
                    key={track.id}
                    track={track}
                    index={i}
                    isActive={currentTrack?.id === track.id}
                    isPlaying={isPlaying && currentTrack?.id === track.id}
                    onToggle={toggle}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {page === 'Albums' && (
          <div className="page-content">
            <div className="section-label">
              All Albums
              <div className="section-divider" />
            </div>

            <div className="album-grid">
              {albums.map((album) => (
                <AlbumCard
                  key={album.id}
                  album={album}
                  trackCount={tracksByAlbum(album.title).length}
                  onClick={() => {}}
                />
              ))}
            </div>

            {albums.map((album) => (
              <div key={album.id} className="album-section">
                <div className="section-label">
                  {album.title} · {album.year}
                  <div className="section-divider" />
                </div>
                <div className="track-list">
                  {tracksByAlbum(album.title).map((track, i) => (
                    <TrackRow
                      key={track.id}
                      track={track}
                      index={i}
                      isActive={currentTrack?.id === track.id}
                      isPlaying={isPlaying && currentTrack?.id === track.id}
                      onToggle={toggle}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {page === 'About' && (
          <div className="page-content--narrow">
            <div className="section-label">
              About
              <div className="section-divider" />
            </div>
            <p className="about-text">
              Original music by James. Recorded in the mountains, written by the fire.
              {' '}Replace this with your own bio and story.
            </p>
          </div>
        )}
      </main>

      <Player
        track={currentTrack}
        isPlaying={isPlaying}
        progress={progress}
        currentTime={currentTime}
        onToggle={toggle}
        onSeek={seek}
      />
    </div>
  );
}
