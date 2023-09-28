import { createSlice } from "@reduxjs/toolkit";

const LocationSlice = createSlice({
  name: "location",
  initialState: {
    selectedLocation: "All",
  },
  reducers: {
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const { setSelectedLocation } = LocationSlice.actions;
export default LocationSlice.reducer;
