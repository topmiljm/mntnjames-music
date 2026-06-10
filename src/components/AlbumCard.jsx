import { useState } from 'react';

export default function AlbumCard({ album, trackCount, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#e5d9c6' : '#ede3d4',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '0.5px solid #c9b89a',
        cursor: 'pointer',
        transition: 'background 0.15s',
        height: '15em',
        width: '11em',
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // gap: '10px'
      }}
    >
      <div style={{ height: '175px', background: album.color, overflow: 'hidden' }}>
        {album.coverArt ? (
          <img
            src={album.coverArt}
            alt={album.title}
            style={{ width: '', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <span style={{ fontSize: '2.2rem', opacity: 0.7, display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>♪</span>
        )}
      </div>
      <div style={{ padding: '10px 12px 12px' }}>
        <div style={{ fontSize: '14px', fontWeight: '500', color: '#2c1f0e', fontFamily: 'Georgia, serif' }}>
          {album.title}
        </div>
        <div style={{ fontSize: '12px', color: '#8a6c48', marginTop: '3px' }}>
          {album.year} · {trackCount} tracks
        </div>
      </div>
    </div>
  );
}
