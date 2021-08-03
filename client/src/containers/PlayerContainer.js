import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Player from "../components/Player";
import useAudio from "../hooks/useAudio";
import { setIsPlaying } from "../redux/slices/currentMusicSlice";

export default function PlayerContainer() {
  const dispatch = useDispatch();
  const { title, artist, coverUrl, isPlaying } = useSelector(state => state.currentMusic);
  useAudio();

  const handleControlButtonClick = useCallback(() => {
    dispatch(setIsPlaying(!isPlaying));
  }, [dispatch, isPlaying]);

  return (
    <Player
      title={title}
      artist={artist}
      coverUrl={coverUrl}
      isPlaying={isPlaying}
      onControlButtonClick={handleControlButtonClick}
    />
  );
}