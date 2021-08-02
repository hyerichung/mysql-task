import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import { getAlbumsAPI } from "../../api";

export const getAllAlbums = createAsyncThunk(
  "ALBUMS/GET_ALL_ALBUMS",
  async (_, { rejectWithValue }) => {
    try {
      const { albums, tracks } = await getAlbumsAPI();

      console.log(albums, "Data", albums);

      return { albums, tracks };
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  }
);

const initialState = {
  albums: {
    byId: {},
    allIds: []
  },
  tracks: {
    byId: {},
    allIds: []
  },
  error: null,
  loading: false
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllAlbums.fulfilled]: (state, action) => {

      console.log(state, "state?");

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