import Heading from "../layout/Heading";
import Adress from "./address/Adress";
import ContactForm from "./form/ContactForm";

export default function Contact() {
  return (
    <>
      <Heading title="Contact" />
      <Adress />
      <ContactForm />
    </>
  );
}
