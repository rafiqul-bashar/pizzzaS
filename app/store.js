import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
