import { createAsyncThunk } from "@reduxjs/toolkit";

import { $instance } from "../constants";

// hydrationEntries
//====================
// get list Entries hydrationEntries for today
// Example:
    //  dispatch( getTodayEntriesThunk());
export const getTodayEntriesThunk = createAsyncThunk(
  "hydrationEntries/getToday",
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
// Example:
    //  dispatch( getMonthProgressThunk({ month: 12, year: 2023 }));
export const getMonthProgressThunk = createAsyncThunk(
  "hydrationEntries/getMonthProgress",
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
// Example:
    // const d= new Date('2023-12-29 10:56:21');
    // const s = d.toJSON(); // "2023-12-29T10:56:21.000Z"
    // dispatch( addEntryThunk({ time: s, amount: 10 }));
export const addEntryThunk = createAsyncThunk(
  "hydrationEntries/addEntry",
  async (entry, thunkAPI) => {
    const {time, amount,} = entry;
    console.log('ADD'.entry);
    try {
      const { data } = await $instance.post("/api/hydration-entries/", { time, amount, });

      console.log('ADDresponce',data);
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// get Entry hydration from Id
// Example:
    // dispatch( getEntryFromIdThunk("658ec9e9911c08519bec2492"));
export const getEntryFromIdThunk = createAsyncThunk(
  "hydrationEntries/getEntryFromId",
  async (entryId, thunkAPI) => {
    try {
      console.log("ID", entryId);
      const { data } = await $instance.get(`/api/hydration-entries/${entryId}`);
      
      console.log('FindIDresponce', data);
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// delete hydration entry
// Example:
  // dispatch( deleteEntryThunk("658eca38911c08519bec24a1"));
export const deleteEntryThunk = createAsyncThunk(
  "hydrationEntries/deleteEntry",
  async (entryId, thunkAPI) => {
    try {
      console.log("ID", entryId);
      const { data } = await $instance.delete(`/api/hydration-entries/${entryId}`);
      console.log('DeleteIDresponce', data);

      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// edit/update hydration entry
// Example:
    // const d= new Date('2023-12-29 10:00:00');
    // const s = d.toJSON(); // "2023-12-29T10:56:21.000Z"
    // dispatch( addEntryThunk({ time: s, amount: 10 }));

    // dispatch( updateEntryThunk({
    //   id: "658ec9e9911c08519bec2492",
    //   time: s,
    //   amount: 7,
    // }));
export const updateEntryThunk = createAsyncThunk(
  "hydrationEntries/updateEntry",
  async (entry, thunkAPI) => {
    const {entryId, time, amount,} = entry;
    try {
      console.log("UpdateRequest:", entryId, time, amount);
      const { data } = await $instance.put(`/api/hydration-entries/${entryId}`, { time, amount });
      
      console.log('UpdateResponce:', data);
      return data;
    } 
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// logout user -> clear hydration entries 
export const clearEntriesThunk = createAsyncThunk(
  "hydrationEntries/clearEntries",
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


