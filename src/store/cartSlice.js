import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartActiveState: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartModal: (state, action) => {
      if (!action.payload) {
        state.cartActiveState = !state.cartActiveState;
      } else {
        state.cartActiveState = action.payload;
      }
    },
    addCartItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCartItems: (state, action) => {
      state.cartItems = [];
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) =>
        cartItem.id !== action.payload
      );
    },
  },
});

export const {
  toggleCartModal,
  addCartItems,
  removeCartItems,
  removeCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
