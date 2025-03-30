import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./slice/modeSlice";
import pokemonSlice from "./slice/pokemonSlice";
import scoreSlice from "./slice/scoreSlice";

export const store = configureStore({
  reducer: {
    modeSlice: modeSlice.reducer,
    pokemonSlice: pokemonSlice.reducer,
    scoreSlice: scoreSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
