import { render, screen } from '@testing-library/react'
import { Hero } from '../index'

// Mock framer-motion
jest.mock('motion/react', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const React = require('react')
  const motionProps = ['initial', 'animate', 'exit', 'transition', 'whileHover', 'whileTap', 'whileInView', 'viewport', 'variants', 'layout']
  const motion = new Proxy({}, {
    get: (_t, tag: string) => {
      const Comp = React.forwardRef(({ children, ...props }: any, ref: any) => {
        for (const k of motionProps) delete props[k]
        return React.createElement(tag, { ...props, ref }, children)
      })
      Comp.displayName = `motion.${tag}`
      return Comp
    },
  })
  return { motion, AnimatePresence: ({ children }: any) => children }
})

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
    const { container } = render(<Hero />)
    expect(container.textContent).toMatch(/React • Next\.js • React Native/i)
  })

  it('displays experience description', () => {
    render(<Hero />)
    expect(screen.getByText(/4 anos/i)).toBeInTheDocument()
    expect(screen.getByText(/2 anos/i)).toBeInTheDocument()
  })

  it('renders LinkedIn link', () => {
    render(<Hero />)
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/adilson-adriano-062018197')
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
