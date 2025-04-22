import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import recipieReducer from "./slices/recipie-slice"

export const store = configureStore({
  reducer: {
    recipe: recipieReducer
  },
});