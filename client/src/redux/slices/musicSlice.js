import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import { getAllAlbumsAPI } from "../../api";

export const getAllAlbums = createAsyncThunk(
  "ALBUMS/GET_ALL_ALBUMS",
  async (_, { rejectWithValue }) => {
    try {
      const { albums, tracks } = await getAllAlbumsAPI();

      return { albums, tracks };
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  }
);

const initialState = {
  albums: [],
  tracks: {
    byAlbumId: {}
  },
  error: null,
  loading: false
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllAlbums.fulfilled]: (state, { payload }) => {
      state.albums = payload.albums;
      state.tracks.byAlbumId = payload.tracks;
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
