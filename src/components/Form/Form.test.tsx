import { Form } from './Form'
import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  INVALID_PASSWORD,
  INVALID_EMAIL,
  VALID_EMAIL,
  VALID_PASSWORD
} from '../utils/constants'

describe('<Form /> | Integration', () => {
  beforeEach(() => {
    render(<Form />)
  })

  it('should display a form title', () => {
    expect(screen.getByRole('heading', { name: 'SING IN' })).toBeInTheDocument()
  })

  it('should change inputs value', async () => {
    userEvent.setup()

    const emailInput = screen.getByLabelText('Email')
    const passInput = screen.getByLabelText('Password')

    expect(emailInput).toHaveValue('')
    expect(passInput).toHaveValue('')

    await userEvent.type(emailInput, 'xab')
    await userEvent.type(passInput, 'xablauzito')

    expect(emailInput).toHaveValue('xab')
    expect(passInput).toHaveValue('xablauzito')
  })

  it('should enable submit button', async () => {
    userEvent.setup()

    const submitBtn = screen.getByRole('button', { name: 'Sign In' })
    expect(submitBtn).toBeDisabled()

    const emailInput = screen.getByLabelText('Email')
    const passInput = screen.getByLabelText('Password')

    await userEvent.type(emailInput, VALID_EMAIL)
    await userEvent.type(passInput, VALID_PASSWORD)

    expect(submitBtn).not.toBeDisabled()
  })

  it('should maintain disabled submit button', async () => {
    userEvent.setup()

    const submitBtn = screen.getByRole('button', { name: 'Sign In' })
    expect(submitBtn).toBeDisabled()

    const emailInput = screen.getByLabelText('Email')
    const passInput = screen.getByLabelText('Password')

    await userEvent.type(emailInput, INVALID_EMAIL)
    await userEvent.type(passInput, INVALID_PASSWORD)

    expect(submitBtn).toBeDisabled()
  })
})
