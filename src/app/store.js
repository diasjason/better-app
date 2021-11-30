import { configureStore } from "@reduxjs/toolkit";
import { addressApi } from "../services/addressApi";

import { cRENews } from "../services/cRENews";

export default configureStore({
  reducer: {
    [cRENews.reducerPath]: cRENews.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
  },
});
