import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

describe('home Page', () => {
  it('renders the home page with correct title and content', async () => {
    render(<Home />)

    expect(document.title).toBe('Home Page')

    // Check for main content
    expect(screen.getByRole('heading', { name: /welcome to my next\.js app!/i })).toBeInTheDocument()
    expect(screen.getByText(/this is a simple home page/i)).toBeInTheDocument()
  })
})
