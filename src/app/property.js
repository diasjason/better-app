import { createSlice } from "@reduxjs/toolkit";

export const propertySlice = createSlice({
  name: "property",
  initialState: {
    npv: 1,
    irr: 5,
    caprate: 7,
    cashoncash: 14,
    value: 1720403,
  },
  reducers: {
    reset: (state) => {
      state.npv = 2;
      state.irr = 3;
      state.caprate = 4;
      state.cashoncash = 5;
      state.value = 1720003;
    },
    runAnalysis: (state, action) => {
      state.npv += 1;
      state.irr += 1;
      state.caprate += 1;
      state.cashoncash += 1;
      state.value *= 1.5;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, reset, runAnalysis } = propertySlice.actions;

export default propertySlice.reducer;
