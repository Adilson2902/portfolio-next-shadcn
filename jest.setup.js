import '@testing-library/jest-dom'

// aura-ui-effects/components são ESM-only e o Jest (CJS) não transpila
// node_modules fora de .pnpm/geist. Mock global: cada export vira um
// componente passthrough — os testes validam estrutura/texto, não animação.
const mockPassthroughComponent = ({ children }) => children ?? null

jest.mock('aura-ui-effects', () => new Proxy({}, { get: () => mockPassthroughComponent }))
jest.mock('aura-ui-components', () => new Proxy({}, { get: () => mockPassthroughComponent }))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return []
  }
  unobserve() {}
}

// Mock window.print
global.print = jest.fn()

// jsdom não implementa WebGL — o probe do HeroBackdrop deve ver "sem suporte"
// em vez de logar "Not implemented" a cada teste.
HTMLCanvasElement.prototype.getContext = jest.fn(() => null)
