import { configureStore } from "@reduxjs/toolkit";
import { addressApi } from "../services/addressApi";

import { cRENews } from "../services/cRENews";
import highlightSlice from "./highlight";
import dashboardReducer from "./property";

export default configureStore({
  reducer: {
    [cRENews.reducerPath]: cRENews.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    dashboard: dashboardReducer,
    highlight: highlightSlice,
  },
});
