import { createAsyncThunk } from "@reduxjs/toolkit";

import { $instance } from "../constants";

// hydrationEntries
//====================
// get list Entries hydrationEntries for today
export const getTodayEntriesThunk = createAsyncThunk(
  "getToday",
  async (_, thunkAPI) => {
    try {
      const { data } = await $instance.get("/api/hydration-entries/today");

      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// get progress hydrationEntries for Month
export const getMonthProgressThunk = createAsyncThunk(
  "getMonthProgress",
  async (date, thunkAPI) => {
    const {month, year} = date;
    try {
      const { data } = await $instance.get(
        `/api/hydration-entries/month-progress?month=${month}&year=${year}`
      );

      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// add Entry Hydration Entries
export const addEntryThunk = createAsyncThunk(
  "addEntry",
  async (entry, thunkAPI) => {
    const {time, amount,} = entry;
    try {
      const { data } = await $instance.post("/api/hydration-entries/", { time, amount, });

      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// get Entry hydration from Id
export const getEntryFromIdThunk = createAsyncThunk(
  "getEntryFromId",
  async (entryId, thunkAPI) => {
    try {
      const { data } = await $instance.get(`/api/hydration-entries/${entryId}`);
      
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// delete hydration entry
export const deleteEntryThunk = createAsyncThunk(
  "deleteEntry",
  async (entryId, thunkAPI) => {
    try {
      const { data } = await $instance.delete(`/api/hydration-entries/${entryId}`);
      
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// edit/update hydration entry
export const updateEntryThunk = createAsyncThunk(
  "updateEntry",
  async (entry, thunkAPI) => {
    const {id:entryId, time, amount,} = entry;
    try {
      const { data } = await $instance.put(`/api/hydration-entries/${entryId}${entryId}`, { time, amount });
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// logout user -> clear hydration entries 
export const clearEntriesThunk = createAsyncThunk(
  "clearEntries",
  async (_, thunkAPI) => {
    try {
      const data = [];
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


