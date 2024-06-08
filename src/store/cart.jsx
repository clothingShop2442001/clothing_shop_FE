import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productID, quantity } = action.payload;
      const indexProducId = state.items.findIndex(
        (item) => item.productID === productID
      );
      if (indexProducId >= 0) {
        state.items[indexProducId].quantity += quantity;
      } else {
        state.items.push({ productID, quantity });
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
