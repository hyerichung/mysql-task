import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setIsPlaying } from "../redux/slices/currentMusicSlice";

export default function useAudio() {
  const { trackUrl, isPlaying } = useSelector(state => state.currentMusic);
  const dispatch = useDispatch();

  const audioRef = useRef();
  const isReady = useRef(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = new Audio(trackUrl);

    if (isReady.current) {
      audioRef.current.play();
      dispatch(setIsPlaying(true));
    } else {
      isReady.current = true;
    }
  }, [dispatch, trackUrl]);

  return;
}
