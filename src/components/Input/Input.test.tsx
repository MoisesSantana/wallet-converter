import { Input } from './Input'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('<Input /> | Integration', () => {
  it('should display a textbox for email entry', () => {
    render(<Input
      name='Email'
      inputState=''
      setInputState={ vi.fn() }
    />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
