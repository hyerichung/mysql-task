import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { musicSlice } from "./slices/musicSlice";

const reducer = {
  music: musicSlice.reducer
};

const middlewares = [thunk, logger];
const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = configureStore({
  reducer,
  composedEnhancers
});

export { store };
