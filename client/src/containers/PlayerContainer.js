import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Player from "../components/Player";
import useAudio from "../hooks/useAudio";
import { setIsPlaying } from "../redux/slices/currentMusicSlice";

export default function PlayerContainer() {
  const dispatch = useDispatch();
  const { title, artist, coverUrl, isPlaying } = useSelector(state => state.currentMusic);
  useAudio();

  function handleControlButtonClick() {
    dispatch(setIsPlaying(!isPlaying));
  }

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