import { configureStore } from "@reduxjs/toolkit";
import FetchapiReducer from "./Fetchapi";

export const store = configureStore({
  reducer: {
    posts: FetchapiReducer,   
  },
});
