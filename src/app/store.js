import { configureStore } from "@reduxjs/toolkit";
import { addressApi } from "../services/addressApi";

import { cRENews } from "../services/cRENews";
import dashboardReducer from "./dashboard";

export default configureStore({
  reducer: {
    [cRENews.reducerPath]: cRENews.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    dashboard: dashboardReducer,
  },
});
