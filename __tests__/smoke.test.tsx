import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

// Mock Next.js components
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))

// Simple component tests
describe('Smoke Tests', () => {
  it('renders a basic React component', () => {
    const TestComponent = () => <div>Hello World</div>
    render(<TestComponent />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('can query DOM elements', () => {
    const TestComponent = () => (
      <div>
        <h1>Custom Creations</h1>
        <p>Auto Body Shop</p>
      </div>
    )
    render(<TestComponent />)
    expect(screen.getByText(/Custom Creations/i)).toBeInTheDocument()
    expect(screen.getByText(/Auto Body Shop/i)).toBeInTheDocument()
  })

  it('testing environment is properly configured', () => {
    expect(true).toBe(true)
  })
})
