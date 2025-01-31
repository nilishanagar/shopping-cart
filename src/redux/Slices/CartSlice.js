import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      // jo bhi input parameter send kiya h ,usse access krne ke liye action.payload
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
