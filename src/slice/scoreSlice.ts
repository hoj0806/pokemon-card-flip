import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface scoreType {
  score: number;
  combo: 0;
}

const initialState: scoreType = { score: 0, combo: 0 };

const scoreSlice = createSlice({
  name: "scoreSlice",
  initialState,
  reducers: {
    increaseScore: (state) => {
      state.score += 1;
    },
    resetScore: (state) => {
      state.score = 0;
    },
    increaseByCombo: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
    increaseCombo: (state) => {
      state.combo += 1;
    },
    resetCombo: (state) => {
      state.combo = 0;
    },
  },
});

export default scoreSlice;
export const { increaseScore, resetScore } = scoreSlice.actions;
export const currentScore = (state: RootState) => state.scoreSlice.score;
