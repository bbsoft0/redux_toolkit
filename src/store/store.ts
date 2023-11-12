import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/themeSlice";
import { postApi } from "../services/post";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    [postApi.reducerPath]: postApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
