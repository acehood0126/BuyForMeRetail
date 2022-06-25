import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";

export const store = configureStore({
  reducer: {
    reducer: reducer,
  },
});
