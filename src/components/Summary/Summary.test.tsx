import { Summary } from './Summary.component'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SUMMARY_CARDS_CONTENT } from '../../utils/constants'

describe('<Summary /> | Integration', () => {
  it('should display three cards with yours especification', () => {
    render(<Summary />)

    const headers = screen.getAllByRole('banner')
    expect(headers).toHaveLength(3)
    headers.forEach((_, index) => {
      const paragraph = screen.getByText(
        SUMMARY_CARDS_CONTENT[index].paragraph,
        { selector: 'p' }
      )

      const icon = screen.getByTestId(
        SUMMARY_CARDS_CONTENT[index].icon
      )

      const value = screen.getAllByText(
        SUMMARY_CARDS_CONTENT[index].value,
        { selector: 'strong' }
      )

      expect(paragraph).toBeInTheDocument()
      expect(icon).toBeInTheDocument()
      expect(value[index]).toBeInTheDocument()
    })
  })
})
