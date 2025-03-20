import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface scoreType {
  score: number;
}

const initialState: scoreType = { score: 0 };

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
  },
});

export default scoreSlice;
export const { increaseScore, resetScore } = scoreSlice.actions;
export const currentScore = (state: RootState) => state.scoreSlice.score;
