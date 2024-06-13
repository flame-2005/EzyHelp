import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import workerReducer from './worker/worker' // Ensure correct import

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    worker: workerReducer, // Use correct naming
  },
})

export default store
