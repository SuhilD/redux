import { createSlice } from "@reduxjs/toolkit";

import { TravelData } from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: TravelData },
  reducers: {
    addTravel: (state, action) => {
      state.value.push(action.payload);
    },

    deleteTravel: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateTravel: (state, action) => {
        const index = state.value.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.value[index] = action.payload;
        }
      },

  },
});

export const { addTravel, deleteTravel, updateTravel } = userSlice.actions;
export default userSlice.reducer;
