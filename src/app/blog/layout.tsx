import type { Metadata } from "next";
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="section-shell" style={{ paddingTop: 24 }}>
        <p>Artigos de demonstração do template — conteúdo em revisão.</p>
      </div>
      {children}
    </>
  );
}
