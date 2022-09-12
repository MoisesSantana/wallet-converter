import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import user from './ducks/user/user.reducer'
import wallet from './ducks/wallet/wallet.reducer'
import { walletSaga } from './ducks/wallet/wallet.saga'

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    user,
    wallet
  },
  middleware: [saga]
})

saga.run(walletSaga)
