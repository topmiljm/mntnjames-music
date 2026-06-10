import { useState } from 'react';

export default function TrackRow({ track, index, isPlaying, isActive, onToggle }) {
  const [hovered, setHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '7px 8px',
        borderRadius: '8px',
        background: isActive ? '#e2d5c0' : hovered ? '#ede3d4' : 'transparent',
        cursor: 'pointer',
        transition: 'background 0.12s',
      }}
      onClick={() => onToggle(track)}
    >
      <div style={{ width: '20px', textAlign: 'center', flexShrink: 0 }}>
        {isActive && isPlaying ? (
          <span style={{ fontSize: '13px', color: '#8c5a28' }}>▶</span>
        ) : isActive ? (
          <span style={{ fontSize: '13px', color: '#8c5a28' }}>❙❙</span>
        ) : (
          <span style={{ fontSize: '12px', color: '#8a6c48' }}>{index + 1}</span>
        )}
      </div>

      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '6px',
          background: track.color,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>♪</span>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: '14px',
          color: isActive ? '#8c5a28' : '#2c1f0e',
          fontWeight: isActive ? '500' : '400',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontFamily: 'Georgia, serif',
        }}>
          {track.title}
        </div>
        <div style={{ fontSize: '12px', color: '#8a6c48' }}>{track.album}</div>
      </div>

      <button
        onClick={e => { e.stopPropagation(); setLiked(l => !l); }}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '16px',
          color: liked ? '#8c5a28' : '#b89a78',
          flexShrink: 0,
          cursor: 'pointer',
          padding: '0 4px',
        }}
        aria-label={liked ? 'Unlike' : 'Like'}
      >
        {liked ? '♥' : '♡'}
      </button>

      <div style={{ fontSize: '13px', color: '#8a6c48', flexShrink: 0 }}>
        {track.duration}
      </div>
    </div>
  );
}
