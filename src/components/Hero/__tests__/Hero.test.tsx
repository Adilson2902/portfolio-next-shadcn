import { render, screen } from '@testing-library/react'
import { Hero } from '../index'

// Mock framer-motion
jest.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
  },
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('Hero Component', () => {
  it('renders hero section', () => {
    render(<Hero />)
    expect(screen.getByText('Adilson')).toBeInTheDocument()
  })

  it('displays developer title', () => {
    render(<Hero />)
    expect(screen.getByText('Desenvolvedor Front-end')).toBeInTheDocument()
  })

  it('shows tech stack', () => {
    render(<Hero />)
    expect(screen.getByText(/React • Next.js • React Native/i)).toBeInTheDocument()
  })

  it('displays experience description', () => {
    render(<Hero />)
    expect(screen.getByText(/4 anos/i)).toBeInTheDocument()
    expect(screen.getByText(/2 anos/i)).toBeInTheDocument()
  })

  it('renders LinkedIn link', () => {
    render(<Hero />)
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/adilson-adriano')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })

  it('renders download CV button', () => {
    render(<Hero />)
    const downloadButton = screen.getByRole('button', { name: /baixar currículo/i })
    expect(downloadButton).toBeInTheDocument()
  })

  it('calls window.print when download button is clicked', () => {
    const printMock = jest.fn()
    global.print = printMock

    render(<Hero />)
    const downloadButton = screen.getByRole('button', { name: /baixar currículo/i })
    downloadButton.click()

    expect(printMock).toHaveBeenCalled()
  })

  it('displays skill badges', () => {
    render(<Hero />)
    expect(screen.getByText('TypeScript Expert')).toBeInTheDocument()
    expect(screen.getByText('Performance Focused')).toBeInTheDocument()
    expect(screen.getByText('3D Animations')).toBeInTheDocument()
  })
})
