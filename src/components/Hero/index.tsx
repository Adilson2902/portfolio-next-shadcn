import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-background pt-24 pb-16 text-center"
    >
      <div className="container max-w-3xl mx-auto px-4 flex flex-col items-center justify-center">
        {/* Foto de perfil com ícones girando */}
        <div className="relative mb-6v w-[380px] h-[380px] flex justify-center items-center mb-10">
          {/* Ícones girando */}
        <div className="absolute inset-0 animate-spin-slow">
  {/* Top */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            width={32}
            height={32}
            alt="React"
          />
        </div>

        {/* Top-right */}
        <div className="absolute right-[15%] top-[15%] transform translate-x-1/2 -translate-y-1/2">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            width={32}
            height={32}
            alt="JavaScript"
          />
        </div>

        {/* Right */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
            width={32}
            height={32}
            alt="CSS3"
          />
        </div>

        {/* Bottom-right */}
        <div className="absolute right-[15%] bottom-[15%] transform translate-x-1/2 translate-y-1/2">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            width={32}
            height={32}
            alt="HTML5"
          />
        </div>

        {/* Bottom */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            width={32}
            height={32}
            alt="Next.js"
          />
        </div>

        {/* Bottom-left */}
        <div className="absolute left-[15%] bottom-[15%] transform -translate-x-1/2 translate-y-1/2">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            width={32}
            height={32}
            alt="Tailwind"
          />
        </div>

        {/* Left */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            width={32}
            height={32}
            alt="TypeScript"
          />
        </div>

        {/* Top-left */}
        <div className="absolute left-[15%] top-[15%] transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            width={32}
            height={32}
            alt="Git"
          />
        </div>
      </div>


          {/* Foto */}
          <div className="relative z-10">
            <Image
              src="/myphoto.jpeg"
              alt="My photo"
              width={180}
              height={180}
              className="rounded-full shadow-lg border-4 border-primary"
            />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-4xl sm:text-5xl font-extrabold font-space-grotesk mb-2 text-primary">
          Hey I am{" "}
        </h1>
        <span className="bg-gradient-to-r  text-6xl sm:text-7xl font-space-grotesk  from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Adilson
          </span>

        {/* Subtítulo */}
        <p className="text-muted-foreground text-base sm:text-lg mb-6">
          Web Developer and Software Engineer
        </p>
      </div>
    </section>
  );
}
