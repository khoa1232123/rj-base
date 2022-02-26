import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productId: null,
};

export const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    set: (state, action) => {
      state.productId = action.payload;
    },
    remove: (state) => {
      state.productId = null;
    },
  },
});

export const { set, remove } = productModalSlice.actions;

export default productModalSlice.reducer;
