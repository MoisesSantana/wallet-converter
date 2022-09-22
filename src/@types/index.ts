import { Dispatch, SetStateAction } from 'react'

export interface IInputProps {
  name: string
  inputState: string
  setInputState: Dispatch<SetStateAction<string>>
}

export interface IReduxState {
  user: {
    email: string
  }
  wallet: {
    currencies: string[]
  }
}

export interface IApiResult {
  data: {
    USD: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    USDT: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    CAD: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    GBP: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    ARS: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    BTC: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    LTC: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    EUR: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    JPY: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    CHF: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    AUD: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    CNY: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    ILS: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    ETH: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    XRP: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
    DOGE: {
      code: string
      codein: string
      name: string
      high: string
      low: string
      varBid: string
      pctChange: string
      bid: string
      ask: string
      timestamp: string
      create_date: string
    }
  }
}
