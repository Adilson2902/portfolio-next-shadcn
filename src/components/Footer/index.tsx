import Link from "next/link";
import { profile } from "@/lib/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <p>© {new Date().getFullYear()} Adilson Adriano.</p>
      <p>React · Next.js · Three.js · Entrega com IA</p>
      <div className="footer-links">
        <Link href="/blog">Guias &amp; Artigos</Link>
        <a href="/llms.txt">llms.txt</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <span aria-hidden="true">↗</span>
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
        <a href="#home">Voltar ao início ↑</a>
      </div>
    </footer>
  );
}
