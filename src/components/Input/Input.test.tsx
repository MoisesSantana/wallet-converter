import { Input } from './Input'
import { it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

it('xab', () => {
  render(<Input
    name='Email'
    inputState=''
    setInputState={ vi.fn() }
  />)
  screen.debug()
})
