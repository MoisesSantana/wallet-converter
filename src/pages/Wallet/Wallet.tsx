import { useSelector, useDispatch } from 'react-redux'
import { IReduxState } from '../../@types'
import { useEffect } from 'react'
import { quotesFetch } from '../../redux/ducks/wallet/wallet.reducer'

export const Wallet = (): JSX.Element => {
  const { email } = useSelector((state: IReduxState) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(quotesFetch())
  }, [dispatch])

  return (
    <h3>{ email }</h3>
  )
}
