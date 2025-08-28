import { ContactPinCard } from "./Card";

export default function Contact() {
  return (
    <section className="py-8 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-primary text-center w-full">
        Contatos
      </h2>
      <div className="flex flex-col xl:flex-row items-center justify-evenly mt-5 w-full">
        <ContactPinCard type="mail" handle="contato@exemplo.com" />
        <ContactPinCard type="instagram" handle="adilsonadriano123" />
        <ContactPinCard type="whatsApp" handle="81982644557" />
      </div>
    </section>
  );
}
