import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setIsPlaying } from "../redux/slices/currentMusicSlice";

export default function useAudio() {
  const { trackUrl, isPlaying } = useSelector(state => state.currentMusic);
  const dispatch = useDispatch();

  const audioRef = useRef();
  const isReady = useRef(false);
  const intervalRef = useRef();

  const checkMusicPlayingWithInterval = () => {
	  clearInterval(intervalRef.current);

	  intervalRef.current = setInterval(() => {
	    if (audioRef.current.ended) {
	      dispatch(setIsPlaying());
	    }
	  }, [1000]);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      checkMusicPlayingWithInterval();
    } else {
      if (audioRef.current) {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
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
