import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerName: {},
  selectedGameMode: {},
  gameMode: [
    { id: 1, label: "byTime", name: "By time", checked: false },
    { id: 2, label: "byTurns", name: "By turns", checked: false },
    { id: 3, label: "unlimited", name: "No limits", checked: false },
  ],
};

export const dataSlice = createSlice({
  name: "gameData",
  initialState,
  reducers: {
    playerName: (state, action) => {
      state.playerName = action.payload;
    },
    selectMode: (state, action) => {
      state.selectedGameMode = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { playerName, selectMode } = dataSlice.actions;

export default dataSlice.reducer;
