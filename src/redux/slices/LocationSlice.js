import { createSlice } from "@reduxjs/toolkit";

const LocationSlice = createSlice({
  name: "location",
  initialState: {
    location: "All",
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = LocationSlice.actions;
export default LocationSlice.reducer;
