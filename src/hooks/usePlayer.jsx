import { useState, useCallback } from 'react';
import { tracks } from '../data/tracks';

export function usePlayer() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [restartTrack, setRestartTrack] = useState(0);

  // Get all tracks for the current album
  const albumTracks = currentTrack
    ? tracks.filter((t) => t.album === currentTrack.album)
    : [];

  const playTrack = useCallback((track) => {
    const albumList = tracks.filter((t) => t.album === track.album);
    const index = albumList.findIndex((t) => t.id === track.id);
    setCurrentTrack(track);
    setCurrentIndex(index);
    setRestartTrack((n) => n + 1);
  }, []);

  const goToIndex = useCallback((index) => {
    if (!currentTrack) return;
    const albumList = tracks.filter((t) => t.album === currentTrack.album);
    if (index >= 0 && index < albumList.length) {
      setCurrentTrack(albumList[index]);
      setCurrentIndex(index);
      setRestartTrack((n) => n + 1);
    }
  }, [currentTrack]);

  return {
    currentTrack,
    currentIndex,
    albumTracks,
    restartTrack,
    playTrack,
    goToIndex,
  };
}