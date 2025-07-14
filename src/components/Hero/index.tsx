import { Button } from "@/components/ui/button" 
import Image from "next/image"

export function Hero() { return ( <section id="home" className="w-full bg-background pt-24 pb-16 text-center"> 
<div className="container max-w-3xl mx-auto px-4 flex flex-col items-center justify-center"> {/* Foto de perfil */}
     <div className="relative mb-6"> 
        <Image src="/me.png" alt="My photo" width={180} height={180} className="rounded-full shadow-lg border-4 border-primary" />
      <div className="absolute -top-2 -left-10">
        <Image src="/icons/js.svg" alt="JS" width={32} height={32} />
      </div>
      <div className="absolute top-0 -right-10">
        <Image src="/icons/html.svg" alt="HTML" width={32} height={32} />
      </div>
      <div className="absolute -bottom-2 -left-10">
        <Image src="/icons/css.svg" alt="CSS" width={32} height={32} />
      </div>
      <div className="absolute -bottom-2 -right-10">
        <Image src="/icons/bootstrap.svg" alt="Bootstrap" width={32} height={32} />
      </div>
    </div>

    {/* Título */}
    <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-primary">
      Hey I am <span className="text-accent">Sandip</span>
    </h1>

    {/* Subtítulo */}
    <p className="text-muted-foreground text-base sm:text-lg mb-6">
      Web Developer and Software Engineer
    </p>

    {/* Botões */}
    <div className="flex gap-4 justify-center">
      <Button variant="default">Download CV</Button>
      <Button variant="outline">Let’s Talk</Button>
    </div>
  </div>
</section>

) }