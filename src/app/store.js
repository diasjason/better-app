import { configureStore } from "@reduxjs/toolkit";
import { addressApi } from "../services/addressApi";

import { cRENews } from "../services/cRENews";
import highlightSlice from "./highlight";
import propertyReducer from "./property";

export default configureStore({
  reducer: {
    [cRENews.reducerPath]: cRENews.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    property: propertyReducer,
    highlight: highlightSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(addressApi.middleware),
});
