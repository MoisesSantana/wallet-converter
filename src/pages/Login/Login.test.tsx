import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { App } from '../../App'
import {
  VALID_EMAIL,
  VALID_PASSWORD
} from '../../utils/constants'

describe('<Login /> | Integration', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })

  // eslint-disable-next-line max-len
  it.todo('should when sign in with a email display the same email in wallet page', async () => {
    userEvent.setup()

    const submitBtn = screen.getByRole('button', { name: 'Sign In' })
    expect(submitBtn).toBeDisabled()

    const emailInput = screen.getByLabelText('Email')
    const passInput = screen.getByLabelText('Password')

    await userEvent.type(emailInput, VALID_EMAIL)
    await userEvent.type(passInput, VALID_PASSWORD)
    await userEvent.click(submitBtn)

    const userEmail = screen.getByRole('heading', { level: 3, name: VALID_EMAIL })
    expect(userEmail).toBeInTheDocument()
  })
})
