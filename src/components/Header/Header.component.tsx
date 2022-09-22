import logo from '../../assets/logo.svg'
import { Container, Content } from './Header.style'

export const Header = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <img src={ logo } alt="Logo" />
        <button type='button'>New Expense</button>
      </Content>
    </Container>
  )
}
