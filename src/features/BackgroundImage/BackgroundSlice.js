import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const backgroundImg = createSlice({
  name: "bgImg",
  initialState,
  reducers: {
    updateBg: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default backgroundImg.reducer;
export const { updateBg } = backgroundImg.actions;
