import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { albumSlice } from "./slices/albumSlice";

const reducer = {
  albums: albumSlice.reducer
};

const middlewares = [thunk, logger];
const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = configureStore({
  reducer,
  middleware: middlewareEnhancer
});

export { store };
