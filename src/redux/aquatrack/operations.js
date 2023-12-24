import { createAsyncThunk } from "@reduxjs/toolkit";

import { $instance } from "../constants";

// AquaTrack
//====================
// update dailyNormal
export const updateDailyNormalThunk = createAsyncThunk(
  "aquatrack/updateDailyNormal",
  async (aquaTrack, thunkAPI) => {
    const {dailyWaterRequirement} = aquaTrack;
    try {
      const { data } = await $instance.patch(`/api/aquatrack/daily-water-requirement`, { dailyWaterRequirement });
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// logout user -> clear DailyNormal 
export const clearDailyNormalThunk = createAsyncThunk(
  "aquatrack/clearDailyNormal",
  async (_, thunkAPI) => {
    try {
      const data = 0;
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



