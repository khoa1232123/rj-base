import { createSlice } from "@reduxjs/toolkit";
const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = { items: items };

console.log(items);

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      const duplicate = findItem(state.items, newItem);

      console.log({ newItem, duplicate, value: state.items });

      if (duplicate.length > 0) {
        state.items = delItem(state.items, newItem);

        state.items = [
          ...state.items,
          {
            ...newItem,
            id: duplicate[0].id,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
      } else {
        console.log("def");
        state.items = [
          ...state.items,
          {
            ...newItem,
            id: newItem.id,
          },
        ];
      }

      localStorage.setItem("cartItems", JSON.stringify(sortItems(state.items)));
    },

    updateItem: (state, action) => {
      const itemUpdate = action.payload;

      const item = findItem(state.items, itemUpdate);

      if (item.length > 0) {
        state.items = delItem(state.items, itemUpdate);

        state.items = [
          ...state.items,
          {
            ...itemUpdate,
            id: item[0].id,
          },
        ];

        localStorage.setItem(
          "cartItems",
          JSON.stringify(sortItems(state.items))
        );
      }
    },

    removeItem: (state, action) => {
      const item = action.payload;
      state.items = delItem(state.items, item);
      localStorage.setItem("cartItems", JSON.stringify(sortItems(state.items)));
    },
    removeAllItems: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

const findItem = (arr, item) => arr.filter((e) => e.id === item.id);

const delItem = (arr, item) => arr.filter((e) => e.id !== item.id);

const sortItems = (arr) =>
  arr.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

export const { addItem, updateItem, removeItem, removeAllItems } =
  cartItemsSlice.actions;

export default cartItemsSlice.reducer;
