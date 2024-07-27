import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import workerReducer from './worker/worker' // Ensure correct import
import textReducer from './name/name' // Correctly import the textSlice reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    worker: workerReducer,
    name: textReducer, // Use the correct reducer and key naming
  },
})

export default store
