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
  progressToday: null,
  itemsMonth: [],
  loading: false,
  error: null,
  showModal: false,
};

const hydrationEntriesSlice = createSlice({
  name: "contacts",
  initialState: hydrationEntriesInitialState,
  reducers: {
    // // select/unselect contact
    // toggleCompleted(state, action) {
    //   const index = state.items.findIndex(
    //     contact => contact.id === action.payload.id);
    //   state.items[index].selected = !state.items[index].selected;
    // },
  },
  extraReducers: (builder) => 
    builder

      // hydrationEntries/getToday
      .addCase(getTodayEntriesThunk.pending, handlePending)
      .addCase(getTodayEntriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.data;
        state.progressToday = action.payload.progress;
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
        state.items.push(action.payload);
        // пересчитать прогресс за день
      })
      .addCase(addEntryThunk.rejected, handleRejected)

      // hydrationEntries/getEntryFromId
      .addCase(getEntryFromIdThunk.pending, handlePending)
      .addCase(getEntryFromIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.find(
          entry => entry.id === action.payload.id
        );
        // пересчитать прогресс за день
      })
      .addCase(getEntryFromIdThunk.rejected, handleRejected)


      // hydrationEntries/deleteEntry
      .addCase(deleteEntryThunk.pending, handlePending)
      .addCase(deleteEntryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        // пересчитать прогресс за день
      })
      .addCase(deleteEntryThunk.rejected, handleRejected)

      // hydrationEntries/updateEntry
      .addCase(updateEntryThunk.pending, handlePending)
      .addCase(updateEntryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          entry => entry.id === action.payload.id
        );
        state.items[index].time = action.payload.time;
        state.items[index].amount = action.payload.amount;
      })
      .addCase(updateEntryThunk.rejected, handleRejected)

      // clearHydrationEntries  (only front) if user logout
      .addCase(clearEntriesThunk.pending, handlePending)
      .addCase(clearEntriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
        state.progressToday = null;
        state.itemsMonth = action.payload;
      })
      .addCase(clearEntriesThunk.rejected, handleRejected)

      // default
      .addDefaultCase((state, action) => {})
});

export const hydrationEntriesReducer = hydrationEntriesSlice.reducer;
//export const { toggleCompleted, } = hydrationEntriesSlice.actions;

