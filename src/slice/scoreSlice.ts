import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ScoreType } from "../types/types";

const initialState: ScoreType = {
  score: 0,
  combo: 0,
  highScore: {
    easy: 0,
    normal: 0,
    hard: 0,
  },
};

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
    updateHighScore: {
      prepare(difficulty, score) {
        return {
          payload: {
            difficulty,
            score,
          },
        };
      },
      reducer(
        state,
        action: PayloadAction<{
          difficulty: "easy" | "normal" | "hard";
          score: number;
        }>
      ) {
        const { difficulty, score } = action.payload;
        state.highScore[difficulty] = score;
      },
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
