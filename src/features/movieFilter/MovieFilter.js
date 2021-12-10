import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  value: {
    query_term: "",
    quality: "",
    genre: "",
    rating: "0",
    sort_by: "date_added",
    order_by: "desc",
  },
};
const MovieFilter = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    updateSearchTerm: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default MovieFilter.reducer;
export const { updateSearchTerm } = MovieFilter.actions;
