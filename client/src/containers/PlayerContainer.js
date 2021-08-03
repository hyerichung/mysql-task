import React, { useEffect, useRef,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Player from "../components/Player";
import useAudio from "../hooks/useAudio";

export default function PlayerContainer() {
  const { title, artist, trackUrl, coverUrl, isPlaying } = useSelector(state => state.currentMusic);
  useAudio();

  return (
    <Player

    />
  );
}