import React from "react";
import { useSelector } from "react-redux";

import Player from "../components/Player";
import useAudio from "../hooks/useAudio";

export default function PlayerContainer() {
  const { title, artist, coverUrl, isPlaying } = useSelector(state => state.currentMusic);
  useAudio();

  return (
    <Player
      title={title}
      artist={artist}
      coverUrl={coverUrl}
      isPlaying={isPlaying}
    />
  );
}