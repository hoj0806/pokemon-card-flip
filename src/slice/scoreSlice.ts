import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface scoreType {
  score: number;
  combo: number;
  highScore: number;
}

const initialState: scoreType = { score: 0, combo: 0, highScore: 0 };

const scoreSlice = createSlice({
  name: "scoreSlice",
  initialState,
  reducers: {
    increaseByCombo: (state, action: PayloadAction<number>) => {
      state.score += action.payload + 1;
    },
    resetScore: (state) => {
      state.score = 0;
    },
    increaseCombo: (state) => {
      state.combo += 1;
    },
    resetCombo: (state) => {
      state.combo = 0;
    },
    updateHighScore: (state, action: PayloadAction<number>) => {
      state.highScore = action.payload;
    },
  },
});

export default scoreSlice;
export const {
  increaseByCombo,
  resetScore,
  increaseCombo,
  resetCombo,
  updateHighScore,
} = scoreSlice.actions;
export const currentScore = (state: RootState) => state.scoreSlice.score;
export const combo = (state: RootState) => state.scoreSlice.combo;
export const highScore = (state: RootState) => state.scoreSlice.highScore;
