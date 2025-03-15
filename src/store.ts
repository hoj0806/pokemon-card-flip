import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./slice/modeSlice";

export const store = configureStore({
  reducer: {
    modeSlice: modeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
