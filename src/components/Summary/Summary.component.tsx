import { Container, SummaryCard } from './Summary.style'
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded'
import ArrowCircleDownRoundedIcon
  from '@mui/icons-material/ArrowCircleDownRounded'
import MonetizationOnRoundedIcon
  from '@mui/icons-material/MonetizationOnRounded'

export const Summary = (): JSX.Element => {
  return (
    <Container>
      <SummaryCard>
        <header>
          <p>Incoming</p>
          <ArrowCircleUpRoundedIcon />
        </header>
        <strong>{'R$'}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <p>Outcome</p>
          <ArrowCircleDownRoundedIcon />
        </header>
        <strong>{'R$'}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <p>Total</p>
          <MonetizationOnRoundedIcon />
        </header>
        <strong>{'R$'}</strong>
      </SummaryCard>
    </Container>
  )
}
