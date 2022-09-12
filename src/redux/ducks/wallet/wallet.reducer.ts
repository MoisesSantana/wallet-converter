import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currencies: [],
  loading: false
}

export const userReducer = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    quotesFetch (state) {
      state.loading = true
    },
    getCurrencies (state, action) {
      state.currencies = action.payload.data
      state.loading = false
    }
  }
})

export const { getCurrencies, quotesFetch } = userReducer.actions
export default userReducer.reducer
