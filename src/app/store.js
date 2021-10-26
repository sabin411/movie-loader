import { configureStore } from "@reduxjs/toolkit";
import backdropReducer from "../features/movieId/ActiveBackdrop";
import BackgroundReducer from "../features/BackgroundImage/BackgroundSlice";
import SearchTermReducer from "../features/movieFilter/MovieFilter";
export const store = configureStore({
  reducer: {
    backdropState: backdropReducer,
    bgImg: BackgroundReducer,
    searchTerm: SearchTermReducer,
  },
});
