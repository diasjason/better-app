import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    npv: 1,
    irr: 5,
    caprate: 7,
    cashoncash: 14,
  },
  reducers: {
    reset: (state) => {
      state.npv = 2;
      state.irr = 3;
      state.caprate = 4;
      state.cashoncash = 5;
    },
    runAnalysis: (state, action) => {
      state.npv += 1;
      state.irr += 1;
      state.caprate += 1;
      state.cashoncash += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, reset, runAnalysis } = dashboardSlice.actions;

export default dashboardSlice.reducer;
