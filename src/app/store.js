import { configureStore } from "@reduxjs/toolkit";

import { cRENews } from "../services/cRENews";

export default configureStore({
  reducer: {
    [cRENews.reducerPath]: cRENews.reducer,
  },
});
