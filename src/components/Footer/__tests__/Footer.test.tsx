import { render, screen } from '@testing-library/react'
import Footer from '../index'

describe('Footer Component', () => {
  it('renders footer with developer name', () => {
    render(<Footer />)
    expect(screen.getByText('Adilson')).toBeInTheDocument()
  })

  it('displays current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('shows tech stack badges', () => {
    render(<Footer />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
  })

  it('displays LinkedIn link', () => {
    render(<Footer />)
    const linkedinLink = screen.getByRole('link', { name: /adilson adriano/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/adilson-adriano')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })

  it('shows made with love message', () => {
    render(<Footer />)
    expect(screen.getByText(/feito com/i)).toBeInTheDocument()
    expect(screen.getByText(/muito café/i)).toBeInTheDocument()
  })
})
