import { configureStore } from "@reduxjs/toolkit";
import "./features/cart/cartSlice";
import CartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
