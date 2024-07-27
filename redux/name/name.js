import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'User',
}

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.value = action.payload
    },
    clearText: (state) => {
      state.value = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { setText, clearText } = textSlice.actions

export default textSlice.reducer
