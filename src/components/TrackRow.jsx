import { useState } from 'react';

export default function TrackRow({ track, index, isPlaying, isActive, onToggle }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="trackrow-container">
      <div
        className={`track-row${isActive ? ' active' : ''}`}
        onClick={() => onToggle(track)}
      >
        <div className={`track-row__num${isActive ? ' track-row__num--playing' : ''}`}>
          {isActive && isPlaying ? '❙❙' : isActive ? '▶' : index + 1}
        </div>

        <div className="track-row__thumb" style={{ background: track.color }}>
          {track.coverArt ? (
            <img src={track.coverArt} alt={track.title} />
          ) : (
            <span className="track-row__thumb-placeholder">♪</span>
          )}
        </div>

        <div className="track-row__info">
          <div className={`track-row__title${isActive ? ' track-row__title--active' : ''}`}>
            {track.title}
          </div>
          <div className="track-row__album">{track.album}</div>
        </div>

        <button
          className={`track-row__like${liked ? ' liked' : ''}`}
          onClick={(e) => { e.stopPropagation(); setLiked((l) => !l); }}
          aria-label={liked ? 'Unlike' : 'Like'}
        >
          {liked ? '♥' : '♡'}
        </button>

        <div className="track-row__duration">{track.duration}</div>
      </div>
    </div>
  );
}
