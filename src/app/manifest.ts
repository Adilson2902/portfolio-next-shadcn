import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adilson Adriano — Portfólio",
    short_name: "Adilson",
    start_url: "/",
    display: "browser",
    background_color: "#101017",
    theme_color: "#101017",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
