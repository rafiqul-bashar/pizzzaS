import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
