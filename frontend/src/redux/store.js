import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import { api } from "./api";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
