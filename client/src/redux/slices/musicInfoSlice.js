import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import { getAllAlbumsAPI } from "../../api";

export const getAllAlbums = createAsyncThunk(
  "ALBUMS/GET_ALL_ALBUMS",
  async (_, { rejectWithValue }) => {
    try {
      const { albums, tracks } = await getAllAlbumsAPI();

      const tracksById = {};
      const flattedTracks = Object.values(tracks).flat();

      flattedTracks.forEach(track => {
        if (tracksById[track.id] === undefined) {
          tracksById[track.id] = [];
        }

        tracksById[track.id] = track;
      });

      return { albums, tracksByAlbumId: tracks, tracksById };
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  }
);

const initialState = {
  albums: [],
  tracks: {
    byAlbumId: {},
    byTrackId: {}
  },
  error: null,
  loading: false
};

export const musicInfoSlice = createSlice({
  name: "musicInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllAlbums.fulfilled]: (state, { payload }) => {
      state.albums = payload.albums;
      state.tracks.byAlbumId = payload.tracksByAlbumId;
      state.tracks.byTrackId = payload.tracksById;
      state.loading = false;
      state.error = false;
    },
    [getAllAlbums.pending]: (state) => {
      state.loading = true;
    },
    [getAllAlbums.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
});
