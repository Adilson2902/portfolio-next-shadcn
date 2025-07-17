
import CardContact from "./Card";

export default function Contact() {
  return (
    <section className="py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-primary text-center w-full">Contact me</h2>
      <div className="flex flex-row items-center justify-evenly mt-5 w-full">
          <CardContact textSocial="nunojraa3@gmail.com" type_icon="mail"/>
          <CardContact textSocial="+5581982644557" type_icon="whatsApp"/>
          <CardContact textSocial="@adilsonadriano123" type_icon="instagram"/>
      </div>
    </section>
  );
}
