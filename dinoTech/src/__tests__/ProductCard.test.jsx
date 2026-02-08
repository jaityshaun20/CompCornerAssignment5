import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect, vi } from 'vitest'
import ProductCard from '../components/ProductCard'

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 19.99,
    image: 'test.jpg',
    description: 'Test description',
  }

  test('renders product name and price', () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />)

    expect(screen.getByText(/test product/i)).toBeInTheDocument()
    expect(screen.getByText(/\$19\.99/)).toBeInTheDocument()
  })

  test('calls onAddToCart when button is clicked', async () => {
    const user = userEvent.setup()
    const mockAddToCart = vi.fn()

    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />)

    const button = screen.getByRole('button', { name: /add to cart/i })
    await user.click(button)

    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct)
  })
})
