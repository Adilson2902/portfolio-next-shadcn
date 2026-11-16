import Link from "next/link";
export function Navbar() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/#home"
          className="wordmark"
          aria-label="Adilson Adriano — início"
        >
          a<span>.</span>
        </Link>
        <nav aria-label="Navegação principal">
          <Link href="/#projects">Projetos</Link>
          <Link href="/#services">Serviços</Link>
          <Link href="/#about">Sobre</Link>
          <Link
            href="/#contact"
            className="nav-contact"
            aria-label="Vamos conversar"
          >
            Vamos conversar <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
