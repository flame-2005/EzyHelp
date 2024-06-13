import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ""
}

export const workerSlice = createSlice({
  name: 'worker',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    },
    appendValue: (state, action) => {
      state.value += action.payload
    },
    clearValue: (state) => {
      state.value = ""
    },
  },
})

// Action creators are generated for each case reducer function
export const { setValue, appendValue, clearValue } = workerSlice.actions

export default workerSlice.reducer
