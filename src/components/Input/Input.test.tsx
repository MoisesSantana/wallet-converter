import { Input } from './Input'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<Input /> | Integration', () => {
  it('should display a input field for email', () => {
    render(<Input
      name='Email'
      inputState=''
      setInputState={ vi.fn() }
    />)

    const emailInput = screen.getByLabelText('Email')
    expect(emailInput).toBeInTheDocument()
  })

  it('should display a input field for password', () => {
    render(<Input
      name='Password'
      inputState=''
      setInputState={ vi.fn() }
    />)

    const passInput = screen.getByLabelText('Password')
    expect(passInput).toBeInTheDocument()
  })

  it('should be possible change type of input', async () => {
    userEvent.setup()
    render(<Input
      name='Password'
      inputState=''
      setInputState={ vi.fn() }
    />)

    const passInput = screen.getByLabelText('Password')

    const viewPassBtn = screen.getByRole('button', { name: 'view' })
    await userEvent.click(viewPassBtn)
    expect(passInput).toHaveAttribute('type', 'text')
    const hiddenPassBtn = screen.getByRole('button', { name: 'hidden' })
    await userEvent.click(hiddenPassBtn)
    expect(passInput).toHaveAttribute('type', 'password')
  })
})
