import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  value: false,
};
const BackdropState = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    updateBackdrop: (state, active) => {
      state.value = active.payload;
    },
  },
});

export default BackdropState.reducer;
export const { updateBackdrop } = BackdropState.actions;
