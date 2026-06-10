import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroHeader from './components/HeroHeader';
import AlbumCard from './components/AlbumCard';
import TrackRow from './components/TrackRow';
import Player from './components/Player';
import { usePlayer } from './hooks/usePlayer';
import { albums, tracks } from './data/tracks';

const sectionLabel = {
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: '#8a6c48',
  fontWeight: '500',
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const divider = {
  flex: 1,
  height: '0.5px',
  background: '#c9b89a',
};

export default function App() {
  const [page, setPage] = useState('Home');
  const { currentTrack, isPlaying, progress, currentTime, toggle, seek } = usePlayer();

  const tracksByAlbum = (albumTitle) =>
    tracks.filter((t) => t.album === albumTitle);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar activePage={page} onNavigate={setPage} />

      <main style={{ flex: 1 }}>
        {page === 'Home' && (
          <>
            <HeroHeader onBrowse={() => setPage('Albums')} />

            <div style={{ padding: '1.5rem 2rem', maxWidth: '960px', margin: '0 auto' }}>
              <div style={sectionLabel}>
                Albums
                <div style={divider} />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '14px',
                marginBottom: '2rem',
              }}>
                {albums.map((album) => (
                  <AlbumCard
                    key={album.id}
                    album={album}
                    trackCount={tracksByAlbum(album.title).length}
                    onClick={() => setPage('Albums')}
                  />
                ))}
              </div>

              <div style={sectionLabel}>
                Latest — Dusk &amp; Timber
                <div style={divider} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
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
          <div style={{ padding: '2rem', maxWidth: '960px', margin: '0 auto' }}>
            <div style={sectionLabel}>
              All Albums
              <div style={divider} />
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '2rem',
            }}>
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
              <div key={album.id} style={{ marginBottom: '2rem' }}>
                <div style={sectionLabel}>
                  {album.title} · {album.year}
                  <div style={divider} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
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
          <div style={{ padding: '2rem', maxWidth: '640px', margin: '0 auto' }}>
            <div style={sectionLabel}>
              About
              <div style={divider} />
            </div>
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#4a3218',
            }}>
              Original music by MNTN James.
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
