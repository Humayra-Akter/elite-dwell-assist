import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlices";
import maidReducer from "./slices/MaidSlice";
import searchReducer from "./slices/searchSlice";
import AvailabilitySlice from "./slices/AvailabilitySlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    availability: AvailabilitySlice,
    maid: maidReducer,
    search: searchReducer,
  },
});

export default Store;
