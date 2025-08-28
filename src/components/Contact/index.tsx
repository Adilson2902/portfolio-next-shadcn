import { ContactPinCard } from "./Card";

export default function Contact() {
  return (
    <section id="contact" className="px-4 flex flex-col items-center pt-14 sm:pt-16 pb-8 scroll-mt-24">
      <h2 className="text-3xl font-bold text-primary text-center w-full">
        Contatos
      </h2>
      <div className="mt-4 sm:mt-5 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 place-items-center">
        <ContactPinCard type="mail" handle="nunojraa3@gmail.com" />
        <ContactPinCard type="instagram" handle="adilsonadriano123" />
        <ContactPinCard type="whatsApp" handle="81982644557" />
      </div>
    </section>
  );
}
