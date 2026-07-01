import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { albums } from '../data/tracks';

export default function Player({ currentTrack, currentIndex, albumTracks, restartTrack, goToIndex }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // ▶️ Play / Pause
  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // ⏭ Next track
  const nextTrack = useCallback(() => {
    if (currentIndex === null || currentIndex >= albumTracks.length - 1) return;
    goToIndex(currentIndex + 1);
  }, [currentIndex, albumTracks, goToIndex]);

  // ⏮ Previous track (restart if > 3s in)
  const prevTrack = useCallback(() => {
    if (!audioRef.current || currentIndex === null) return;
    if (audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }
    if (currentIndex > 0) {
      goToIndex(currentIndex - 1);
    }
  }, [currentIndex, goToIndex]);

  // 🎧 Load & autoplay when track changes
  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.load();
      audioRef.current.currentTime = 0;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => { });
      }
      setIsPlaying(true);
    }
  }, [currentTrack, restartTrack]);

  // 🎹 Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.repeat) return;
      const tag = document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        togglePlay();
      }
      if (e.code === 'ArrowRight') nextTrack();
      if (e.code === 'ArrowLeft') prevTrack();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, nextTrack, prevTrack]);

  // ⏱ Progress update
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 0);
  };

  // 🎯 Seek
  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  // ⏱ Format time
  const formatTime = (time) => {
    if (!time) return '0:00';
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  if (!currentTrack) {
    return (
      <div className="player">
        <span className="player__empty">Select a demo to play</span>
      </div>
    );
  }

  const currentAlbum = albums.find((a) => a.id === currentTrack.albumId);

  return (
    <div className="player">

      {/* Album art + track info — links to album page */}
      <Link
        to={currentAlbum ? `/demos/${currentAlbum.slug}` : '/demos'}
        className="player__now-playing"
      >
        <div className="player__thumb" style={{ background: currentTrack.color }}>
          {currentTrack.coverArt ? (
            <img src={currentTrack.coverArt} alt={currentTrack.title} />
          ) : (
            <span className="player__thumb-placeholder">♪</span>
          )}
        </div>
        <div>
          <div className="player__track-title">
            {currentTrack.title.length > 50
              ? currentTrack.title.slice(0, 50) + '…'
              : currentTrack.title}
          </div>
          <div className="player__track-album">{currentTrack.album}</div>
        </div>
      </Link>

      {/* Controls + seek bar */}
      <div className="player__controls">
        <div className="player__btn-row">
          <button
            className="player__btn"
            onClick={prevTrack}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >⏮</button>

          <button
            className="player__btn player__btn--play"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '❙❙' : '▶'}
          </button>

          <button
            className="player__btn"
            onClick={nextTrack}
            disabled={currentIndex === albumTracks.length - 1}
            aria-label="Next"
          >⏭</button>
        </div>


        <div className="player__progress">
          <span className="player__time">{formatTime(progress)}</span>
          <input
            type="range"
            className="player__seek"
            min={0}
            max={duration || 0}
            value={progress}
            onChange={handleSeek}
            aria-label="Seek"
          />
          <span className="player__time player__time--right">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="player__spacer" />

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextTrack}
      >
        <source src={currentTrack.src} type="audio/wav" />
      </audio>
    </div>
  );
}
