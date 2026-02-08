import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'

describe('HomePage', () => {
  test('renders welcome message', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    expect(screen.getByText(/welcome to dinotech/i)).toBeInTheDocument()
  })
})
