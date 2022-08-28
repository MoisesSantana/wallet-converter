import { Input } from "./Input"
import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react"

it('xab', () => {
  render(<Input />)
  screen.debug()
})