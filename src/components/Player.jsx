const s = {
  bar: {
    background: '#2c1f0e',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0 1.5rem',
    height: '80px',
    borderTop: '0.5px solid #4a3218',
    position: 'sticky',
    bottom: 0,
    zIndex: 100,
  },
  nowPlaying: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '200px',
    flexShrink: 0,
  },
  thumb: {
    width: '42px',
    height: '42px',
    borderRadius: '6px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
  },
  btnRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  btn: {
    background: 'none',
    border: 'none',
    color: '#9e7d55',
    cursor: 'pointer',
    fontSize: '18px',
    display: 'flex',
    padding: 0,
    lineHeight: 1,
  },
  playBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#c4a055',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2c1f0e',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  },
  progress: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  time: {
    fontSize: '10px',
    color: '#6b5038',
    minWidth: '30px',
  },
  bar_: {
    flex: 1,
    height: '3px',
    background: '#4a3218',
    borderRadius: '2px',
    cursor: 'pointer',
    position: 'relative',
  },
};

export default function Player({ track, isPlaying, progress, currentTime, onToggle, onSeek }) {
  if (!track) {
    return (
      <div style={s.bar}>
        <div style={{ color: '#6b5038', fontSize: '13px', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
          Select a track to play
        </div>
      </div>
    );
  }

  const handleBarClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    onSeek(Math.max(0, Math.min(1, ratio)));
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const elapsed = formatTime(currentTime);
  const total = track.duration;

  return (
    <div style={s.bar}>
      <div style={s.nowPlaying}>
        <div style={{ ...s.thumb, background: track.color }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>♪</span>
        </div>
        <div>
          <div style={{ fontSize: '13px', color: '#f0e0c4', fontWeight: '500', fontFamily: 'Georgia, serif' }}>
            {track.title}
          </div>
          <div style={{ fontSize: '11px', color: '#9e7d55' }}>{track.album}</div>
        </div>
      </div>

      <div style={s.controls}>
        <div style={s.btnRow}>
          <button style={s.btn} aria-label="Previous">⏮</button>
          <button
            style={s.playBtn}
            onClick={() => onToggle(track)}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '❙❙' : '▶'}
          </button>
          <button style={s.btn} aria-label="Next">⏭</button>
        </div>

        <div style={s.progress}>
          <span style={s.time}>{elapsed}</span>
          <div style={s.bar_} onClick={handleBarClick}>
            <div style={{
              height: '100%',
              background: '#c4a055',
              borderRadius: '2px',
              width: `${Math.round(progress * 100)}%`,
              pointerEvents: 'none',
            }} />
          </div>
          <span style={{ ...s.time, textAlign: 'right' }}>{total}</span>
        </div>
      </div>

      <div style={{ width: '100px', flexShrink: 0 }} />
    </div>
  );
}
