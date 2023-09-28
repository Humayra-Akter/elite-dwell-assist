import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlices";
import LocationSlice from "./slices/LocationSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    location: LocationSlice,
  },
});

export default Store;
