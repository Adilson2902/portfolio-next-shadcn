import { profile } from "@/lib/portfolio";
export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <p>© {new Date().getFullYear()} Adilson Adriano.</p>
      <p>React · Next.js · TypeScript</p>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn <span aria-hidden="true">↗</span>
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
      <a href="#home">Voltar ao início ↑</a>
    </footer>
  );
}
