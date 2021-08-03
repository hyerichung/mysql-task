import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { currentMusicSlice } from "./slices/currentMusicSlice";
import { musicInfoSlice } from "./slices/musicInfoSlice";

const reducer = {
  musicInfo: musicInfoSlice.reducer,
  currentMusic: currentMusicSlice.reducer
};

const middlewares = [thunk, logger];
const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = configureStore({
  reducer,
  composedEnhancers
});

export { store };
