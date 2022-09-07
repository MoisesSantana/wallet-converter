import { useSelector } from 'react-redux'

export const Wallet = (): JSX.Element => {
  const { email } = useSelector((state) => state.user)
  return (
    <h3>{ email }</h3>
  )
}
