import { Header } from './Header.component'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('<Header /> | Integration', () => {
  it('should display logo and button to add expense', () => {
    render(<Header />)

    const logo = screen.getByRole('img', { name: 'Logo' })
    expect(logo).toBeInTheDocument()

    const addExpenseBtn = screen.getByRole('button', { name: 'New Expense' })
    expect(addExpenseBtn).toBeInTheDocument()
  })
})
