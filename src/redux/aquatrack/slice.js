import { createSlice } from "@reduxjs/toolkit";

import { 
  updateDailyNormalThunk,
  clearDailyNormalThunk, } from "./operations";

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const aquatrackInitialState = { 
  dailyWaterRequirement: 0,
  loading: false,
  error: null,
  showModal: false,
};

const aquatrackSlice = createSlice({
  name: "aquatrack",
  initialState: aquatrackInitialState,
  reducers: {
  },
  extraReducers: (builder) => 
    builder
      // updateDailyNormal
      .addCase(updateDailyNormalThunk.pending, handlePending)
      .addCase(updateDailyNormalThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.dailyWaterRequirement = action.payload.dailyWaterRequirement;
      })
      .addCase(updateDailyNormalThunk.rejected, handleRejected)

      // clear (only front) if user logout
      .addCase(clearDailyNormalThunk.pending, handlePending)
      .addCase(clearDailyNormalThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.dailyWaterRequirement = action.payload;
      })
      .addCase(clearDailyNormalThunk.rejected, handleRejected)

      // default
      .addDefaultCase((state, action) => {})
});

export const aquatraReducer = aquatrackSlice.reducer;
export const { toggleCompleted, } = aquatrackSlice.actions;

