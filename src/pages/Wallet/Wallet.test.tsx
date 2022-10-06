import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { App } from '../../App'
import {
  VALID_EMAIL,
  VALID_PASSWORD
} from '../../utils/constants'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { mockData } from '../../utils/mockData'

describe('<Login /> | Integration', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData)
    })

    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    )
  })

  // eslint-disable-next-line max-len
  it('should when sign in with a email display the same email in wallet page', async () => {
    userEvent.setup()

    const submitBtn = screen.getByRole('button', { name: 'Sign In' })
    const emailInput = screen.getByLabelText('Email')
    const passInput = screen.getByLabelText('Password')

    await userEvent.type(emailInput, VALID_EMAIL)
    await userEvent.type(passInput, VALID_PASSWORD)
    await userEvent.click(submitBtn)

    expect(global.fetch).toHaveBeenCalled()
  })
})
