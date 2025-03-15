import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modeType {
  mode: string;
}

const initialState: modeType = { mode: "" };

const modeSlice = createSlice({
  name: "modeSlice",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export default modeSlice;
export const { setMode } = modeSlice.actions;
