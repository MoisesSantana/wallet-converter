import { configureStore } from '@reduxjs/toolkit'
import user from './user.slice'

export const store = configureStore({
  reducer: {
    user
    // wallet
  }
})
