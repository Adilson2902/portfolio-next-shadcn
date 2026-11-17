import Link from "next/link";

const navLinks = [
  { href: "/#projects", label: "Projetos" },
  { href: "/#services", label: "Soluções" },
  { href: "/#solutions", label: "Simulador" },
  { href: "/#live", label: "No ar" },
  { href: "/#tech", label: "Stack" },
];

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
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
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
