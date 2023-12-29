import { createSlice } from "@reduxjs/toolkit";

import { 
  getTodayEntriesThunk,
  getMonthProgressThunk,
  addEntryThunk, 
  getEntryFromIdThunk,
  deleteEntryThunk,
  updateEntryThunk,
  clearEntriesThunk, } from "./operations";

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const hydrationEntriesInitialState = { 
  items: [], 
  progress: 0,
  itemsMonth: [],
  loading: false,
  error: null,
  showModal: false,
};

const hydrationEntriesSlice = createSlice({
  name: "hydrationEntries",
  initialState: hydrationEntriesInitialState,
  reducers: { 
    // for actions 
    // пересчет процесса за день
  }, 
  extraReducers: (builder) => 
    builder

      // hydrationEntries/getToday
      .addCase(getTodayEntriesThunk.pending, handlePending)
      .addCase(getTodayEntriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.data;
        state.progress = action.payload.progress;
      })
      .addCase(getTodayEntriesThunk.rejected, handleRejected)

      // hydrationEntries/getMonthProgress
      .addCase(getMonthProgressThunk.pending, handlePending)
      .addCase(getMonthProgressThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.itemsMonth = action.payload;
      })
      .addCase(getMonthProgressThunk.rejected, handleRejected)

      // hydrationEntries/addEntry
      .addCase(addEntryThunk.pending, handlePending)
      .addCase(addEntryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // console.log('DO-data', action.payload);
        // console.log('DO', state.items);
        state.items.push(action.payload);
        // console.log("AFTER", state.items);
        // пересчитать прогресс за день?
      })
      .addCase(addEntryThunk.rejected, handleRejected)

      // hydrationEntries/getEntryFromId
      .addCase(getEntryFromIdThunk.pending, handlePending)
      .addCase(getEntryFromIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
  console.log('DO-data', action.payload);
        state.items.find(
          entry => entry.id === action.payload.id
        );
  console.log('AFTER', state.items);

        // пересчитать прогресс за день?
      })
      .addCase(getEntryFromIdThunk.rejected, handleRejected)

      // hydrationEntries/deleteEntry
      .addCase(deleteEntryThunk.pending, handlePending)
      .addCase(deleteEntryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
  console.log('DO-data', action.payload);
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
  console.log('AFTER', state.items);
        // пересчитать прогресс за день?
      })
      .addCase(deleteEntryThunk.rejected, handleRejected)

      // hydrationEntries/updateEntry
      .addCase(updateEntryThunk.pending, handlePending)
      .addCase(updateEntryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
  console.log('DO-data', action.payload);
        const index = state.items.findIndex(
          entry => entry.id === action.payload.id
        );
        state.items[index].time = action.payload.time;
        state.items[index].amount = action.payload.amount;
  console.log('AFTER', state.items);
        // пересчитать прогресс за день?
      })
      .addCase(updateEntryThunk.rejected, handleRejected)

      // clearHydrationEntries  (only front) if user logout
      .addCase(clearEntriesThunk.pending, handlePending)
      .addCase(clearEntriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
        state.progress = 0;
        state.itemsMonth = action.payload;
      })
      .addCase(clearEntriesThunk.rejected, handleRejected)

      // default
      .addDefaultCase((state, action) => {})
});

export const hydrationEntriesReducer = hydrationEntriesSlice.reducer;
//export const { toggleCompleted, } = hydrationEntriesSlice.actions;

