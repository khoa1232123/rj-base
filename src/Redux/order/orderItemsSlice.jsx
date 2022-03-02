import { createSlice } from "@reduxjs/toolkit";
const items =
  localStorage.getItem("orderItems") !== null
    ? JSON.parse(localStorage.getItem("orderItems"))
    : [];

const initialState = { items: items };

console.log(items);

export const orderItemsSlice = createSlice({
  name: "orderItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      state.items = [
        ...state.items,
        {
          ...newItem,
        },
      ];

      localStorage.setItem("orderItems", JSON.stringify(state.items));
    },
  },
});

export const { addItem } = orderItemsSlice.actions;

export default orderItemsSlice.reducer;
