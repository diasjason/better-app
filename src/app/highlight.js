import { createSlice } from "@reduxjs/toolkit";

export const highlightSlice = createSlice({
  name: "highlight",
  initialState: {
    value: false,
  },
  reducers: {
    flash: (state) => {
      state.value = true;
    },
    unFlash: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { flash, unFlash } = highlightSlice.actions;

export default highlightSlice.reducer;
