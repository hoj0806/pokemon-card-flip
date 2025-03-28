import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ModeType } from "../types/types";

const initialState: ModeType = { mode: "main", difficulty: "" };

const modeSlice = createSlice({
  name: "modeSlice",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    setDifficulty: (
      state,
      action: PayloadAction<"" | "easy" | "normal" | "hard">
    ) => {
      state.difficulty = action.payload;
    },
  },
});

export default modeSlice;
export const { setMode, setDifficulty } = modeSlice.actions;
export const selectMode = (state: RootState) => state.modeSlice.mode;
export const selectDifficulty = (state: RootState) =>
  state.modeSlice.difficulty;
