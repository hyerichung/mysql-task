import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  title: "",
  artist: "",
  trackUrl: "",
  coverUrl: "",
  isPlaying: false
};

export const currentMusicSlice = createSlice({
  name: "currentMusic",
  initialState,
  reducers: {
    setCurrentMusic: (state, { payload }) => {
      state.id = payload.track.id;
      state.tite = payload.track.title;
      state.trackUrl = payload.track.track_url;
      state.artist = payload.artist;
      state.coverUrl = payload.coverUrl;
    },
    setIsPlaying: (state, { payload }) => {
      state.isPlaying = payload;
    }
  }
});

const {
  setCurrentMusic,
  setIsPlaying
} = currentMusicSlice.actions;

export {
  setCurrentMusic,
  setIsPlaying,
};
