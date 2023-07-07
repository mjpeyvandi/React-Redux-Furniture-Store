import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productInfo: [],
  userInfo: null,
};

export const Slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: async (state, action) => {
      const response = await fetch("http://localhost:8000/carts");
      const data = await response.json();
      console.log(data);

      const existingProduct = data.find((item) => {
        return item.id === action.payload.id;
      });

      if (existingProduct) {
        const updatedProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity + action.payload.quantity,
        };

        await fetch(`http://localhost:8000/carts/${existingProduct.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        });
      } else {
        await fetch("http://localhost:8000/carts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(action.payload),
        });
      }
    },

  },
});

export const { addToCart, deleteItem, increament, decreament } = Slice.actions;

export default Slice.reducer;
