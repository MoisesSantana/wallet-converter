import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: ''
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn (state, action) {
      state.email = action.payload
    }
  }
})

export const { signIn } = userReducer.actions
export default userReducer.reducer
