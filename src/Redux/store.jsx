import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./cart/cartItemsSlice";
import productModalSlice from "./product-modal/productModalSlice";
import orderItemsSlice from "./order/orderItemsSlice";

export const store = configureStore({
  reducer: {
    cartItems: cartItemsSlice,
    productModal: productModalSlice,
    orderItems: orderItemsSlice,
  },
});
