import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adilson Adriano — Sites, Sistemas Web, Ferramentas Online & 3D",
    short_name: "Adilson Adriano",
    description:
      "Portfólio de Adilson Adriano: sites comerciais para empresas, calculadoras interativas, micro-SaaS, apps mobile e interfaces 3D com entrega rápida.",
    start_url: "/",
    display: "browser",
    lang: "pt-BR",
    background_color: "#080412",
    theme_color: "#080412",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
