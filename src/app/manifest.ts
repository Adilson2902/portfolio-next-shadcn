import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Adilson - Desenvolvedor Front-end',
    short_name: 'Adilson Dev',
    description: 'Portfólio profissional de Adilson, desenvolvedor front-end especializado em React, Next.js e React Native',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#8b5cf6',
    icons: [
      {
        src: '/myphoto.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/myphoto.jpeg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}
