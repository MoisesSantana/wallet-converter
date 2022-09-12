import { call, put, takeEvery } from 'redux-saga/effects'
import { api } from '../../../services/api'
import { getCurrencies } from './wallet.reducer'

function * getCurrenciesFetch (): Generator {
  try {
    const response = yield call(api.get, '/all')
    yield put(getCurrencies(response))
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    console.log('Unexpected error', error)
  }
}

export function * walletSaga (): Generator {
  console.log('oi')

  yield takeEvery('wallet/quotesFetch', getCurrenciesFetch)
}
