import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-primary">Contato</h2>
      <form className="space-y-4 max-w-xl">
        <Input placeholder="Seu nome" />
        <Input placeholder="Seu e-mail" />
        <Textarea placeholder="Sua mensagem..." />
        <Button type="submit">Enviar</Button>
      </form>
    </section>
  );
}
