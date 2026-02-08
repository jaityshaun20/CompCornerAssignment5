import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect, vi } from 'vitest'
import CartItem from '../components/CartItem'

describe('CartItem', () => {
  const mockItem = {
    id: 1,
    name: 'Test Item',
    price: 9.99,
    quantity: 2,
  }

  test('renders item name and price', () => {
    render(<CartItem item={mockItem} onRemove={() => {}} />)

    expect(screen.getByText(/test item/i)).toBeInTheDocument()
    expect(screen.getByText(/\$9\.99/)).toBeInTheDocument()
  })

  test('calls onRemove when remove button is clicked', async () => {
    const user = userEvent.setup()
    const mockRemove = vi.fn()

    render(<CartItem item={mockItem} onRemove={mockRemove} />)

    const button = screen.getByRole('button', { name: /remove/i })
    await user.click(button)

    expect(mockRemove).toHaveBeenCalledWith(mockItem.id)
  })
})
