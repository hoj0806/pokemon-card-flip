import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./slice/modeSlice";
import pokemonSlice from "./slice/pokemonSlice";

export const store = configureStore({
  reducer: {
    modeSlice: modeSlice.reducer,
    pokemonSlice: pokemonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
