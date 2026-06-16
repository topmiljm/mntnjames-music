export default function Player({ track, isPlaying, progress, currentTime, onToggle, onSeek }) {
  if (!track) {
    return (
      <div className="player">
        <span className="player__empty">Select a demo to play</span>
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

  return (
    <div className="player">
      <div className="player__now-playing">
        <div className="player__thumb" style={{ background: track.color }}>
          {track.coverArt ? (
            <img src={track.coverArt} alt={track.title} />
          ) : (
            <span className="player__thumb-placeholder">♪</span>
          )}
        </div>
        <div>
          <div className="player__track-title">{track.title}</div>
          <div className="player__track-album">{track.album}</div>
        </div>
      </div>

      <div className="player__controls">
        <div className="player__btn-row">
          <button className="player__btn" aria-label="Previous">⏮</button>
          <button
            className="player__btn player__btn--play"
            onClick={() => onToggle(track)}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '❙❙' : '▶'}
          </button>
          <button className="player__btn" aria-label="Next">⏭</button>
        </div>

        <div className="player__progress">
          <span className="player__time">{formatTime(currentTime)}</span>
          <div className="player__progress-bar" onClick={handleBarClick}>
            <div
              className="player__progress-fill"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <span className="player__time player__time--right">{track.duration}</span>
        </div>
      </div>

      <div className="player__spacer" />
    </div>
  );
}
