import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlices";
import LocationSlice from "./slices/LocationSlice";
import maidReducer from "./slices/MaidSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    location: LocationSlice,
    maid: maidReducer,
  },
});

export default Store;
