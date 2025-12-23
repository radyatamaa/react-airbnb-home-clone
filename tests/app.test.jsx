import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../src/App.jsx'

describe('App UI', () => {
  test('renders key sections', () => {
    render(<App />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Your home could make/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /It’s easy to list your home on Airbnb/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /A co-host can help you get started/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /However you host, you’re protected/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /All the tools you need to host/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Your questions, answered/i })).toBeInTheDocument()
  })

  test('renders co-host cards from dummy data', () => {
    render(<App />)
    const grid = screen.getByTestId('cohost-grid')
    // 5 co-host cards in dummy JSON
    expect(grid.querySelectorAll('.card').length).toBe(5)
  })

  test('accordion toggles content', async () => {
    const user = userEvent.setup()
    render(<App />)

    const btn = screen.getByRole('button', { name: /Top questions/i })
    expect(screen.queryByText(/How does Airbnb help protect hosts\?/i)).not.toBeInTheDocument()

    await user.click(btn)
    expect(screen.getByText(/How does Airbnb help protect hosts\?/i)).toBeInTheDocument()

    await user.click(btn)
    expect(screen.queryByText(/How does Airbnb help protect hosts\?/i)).not.toBeInTheDocument()
  })

  test('hero estimate changes when slider moves', async () => {
    const user = userEvent.setup()
    render(<App />)


    // Select the .estimateValue element directly
    const valueEl = document.querySelector('.estimateValue')
    const before = valueEl.textContent

    const slider = screen.getByLabelText('Nights slider')
    fireEvent.change(slider, { target: { value: 20 } })

    // Wait for React state update
    await new Promise((r) => setTimeout(r, 0))
    const after = valueEl.textContent
    expect(after).not.toEqual(before)
  })
})
