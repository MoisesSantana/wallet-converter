import { call, CallEffect, put, PutEffect, takeEvery } from 'redux-saga/effects'
import { IApiResult } from '../../../@types'
import { api } from '../../../services/api'
import { getCurrencies } from './wallet.reducer'

const filterCurrencies = ({ data }: IApiResult): string[] => {
  const keys = Object.keys(data)
  return keys
}

function * getCurrenciesFetch ():
Generator<CallEffect | PutEffect, void, IApiResult> {
  try {
    const response = yield call(api.get, '/all')
    const currencies = filterCurrencies(response)
    yield put(getCurrencies(currencies))
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    console.log('Unexpected error', error)
  }
}

export function * walletSaga (): Generator {
  yield takeEvery('wallet/quotesFetch', getCurrenciesFetch)
}
