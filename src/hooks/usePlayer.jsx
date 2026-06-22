import { useState, useRef, useEffect, useCallback } from 'react';

export function usePlayer() {
  const audioRef = useRef(new Audio());
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0–1
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const onTimeUpdate = () => {
      if (audio.duration) {
        setProgress(audio.currentTime / audio.duration);
        setCurrentTime(audio.currentTime);
      }
    };
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const play = useCallback((track) => {
    const audio = audioRef.current;
    if (currentTrack?.id === track.id) {
      audio.play();
      setIsPlaying(true);
      return;
    }
    if (track.src) {
      audio.src = track.src;
      audio.play();
    }
    setCurrentTrack(track);
    setIsPlaying(true);
    setProgress(0);
    setCurrentTime(0);
  }, [currentTrack]);

  const pause = useCallback(() => {
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback((track) => {
    if (currentTrack?.id === track.id && isPlaying) {
      pause();
    } else {
      play(track);
    }
  }, [currentTrack, isPlaying, play, pause]);

  const seek = useCallback((ratio) => {
    const audio = audioRef.current;
    if (audio.duration) {
      audio.currentTime = ratio * audio.duration;
    }
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return {
    currentTrack,
    isPlaying,
    progress,
    currentTime,
    play,
    pause,
    toggle,
    seek,
    formatTime,
  };
}