import { render, screen, within } from '@testing-library/react'
import { Resume } from '../index'

describe('Resume Component', () => {
  it('renders resume header with name', () => {
    render(<Resume />)
    expect(screen.getByText('Adilson Adriano')).toBeInTheDocument()
  })

  it('displays job title', () => {
    render(<Resume />)
    expect(screen.getByText(/Desenvolvedor Front-end \| React, Next\.js e React Native/i)).toBeInTheDocument()
  })

  it('shows contact information', () => {
    render(<Resume />)
    expect(screen.getByText('nunojraa3@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('(81) 98264-4557')).toBeInTheDocument()
    expect(screen.getByText('linkedin.com/in/adilson-adriano')).toBeInTheDocument()
    expect(screen.getByText('Recife - PE')).toBeInTheDocument()
  })

  it('displays professional summary', () => {
    render(<Resume />)
    expect(screen.getByText(/Desenvolvedor front-end com atuação em produtos digitais/i)).toBeInTheDocument()
  })

  it('shows Wiipo experience', () => {
    render(<Resume />)
    expect(screen.getByText('Desenvolvedor Front-end React e React Native')).toBeInTheDocument()
    expect(screen.getByText('Wiipo')).toBeInTheDocument()
    expect(screen.getByText('2021 - Atual')).toBeInTheDocument()
  })

  it('shows ImuneKids experience', () => {
    render(<Resume />)
    expect(screen.getByText('Desenvolvedor Front-end (Estágio)')).toBeInTheDocument()
    expect(screen.getByText('ImuneKids')).toBeInTheDocument()
    expect(screen.getByText('2020 - 2023')).toBeInTheDocument()
  })

  it('shows freelance experience', () => {
    render(<Resume />)
    expect(screen.getByText('Desenvolvedor Front-end Freelancer')).toBeInTheDocument()
    expect(screen.getByText('Projetos Diversos')).toBeInTheDocument()
    expect(screen.getByText('2023 - 2025')).toBeInTheDocument()
  })

  it('displays featured projects', () => {
    render(<Resume />)
    expect(screen.getByText('Veículos Maceió')).toBeInTheDocument()
    expect(screen.getByText('Estetico Masso')).toBeInTheDocument()
    expect(screen.getByText('Auto Escola Manager')).toBeInTheDocument()
    expect(screen.getByText('Michelle Aleixo Fisioterapia')).toBeInTheDocument()
  })

  it('shows technical skills', () => {
    render(<Resume />)
    expect(screen.getByText(/React, Next\.js, TypeScript, JavaScript, HTML5, CSS3/i)).toBeInTheDocument()
    expect(screen.getByText(/React Native, Expo, iOS, Android/i)).toBeInTheDocument()
    expect(screen.getByText(/Core Web Vitals, SSR\/SSG/i)).toBeInTheDocument()
  })

  it('displays languages', () => {
    render(<Resume />)
    const sectionTitle = screen.getByRole('heading', { name: /idiomas/i })
    const languagesSection = sectionTitle.closest('section')

    expect(languagesSection).not.toBeNull()
    expect(within(languagesSection as HTMLElement).getByText(/Português:/i)).toBeInTheDocument()
    expect(within(languagesSection as HTMLElement).getByText(/Nativo/i)).toBeInTheDocument()
    expect(within(languagesSection as HTMLElement).getByText(/Inglês:/i)).toBeInTheDocument()
    expect(within(languagesSection as HTMLElement).getByText(/Técnico/i)).toBeInTheDocument()
  })

  it('has print-resume class for print styling', () => {
    const { container } = render(<Resume />)
    const resumeElement = container.firstChild
    expect(resumeElement).toHaveClass('print-resume')
  })
})
