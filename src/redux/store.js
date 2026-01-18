import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice' // counterSlice.reducer is written as counterReducer bcs it is default export

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})