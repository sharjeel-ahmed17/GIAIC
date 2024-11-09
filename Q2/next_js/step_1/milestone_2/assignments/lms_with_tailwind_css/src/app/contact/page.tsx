import ContactForm from "@/components/contact/contactForm/ContactForm";
import ContactInformation from "@/components/contact/contactInformation/ContactInformation";

const Contact = () => {
  return (
    <section className="py-10 px-5 bg-gray-100">
      <div className="flex flex-col items-center gap-10 max-w-5xl mx-auto">
        <ContactForm />
        <ContactInformation />
      </div>
    </section>
  );
};

export default Contact;
