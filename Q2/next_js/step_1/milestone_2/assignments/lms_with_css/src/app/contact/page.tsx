import ContactForm from "@/components/contact/contactForm/ContactForm"
import ContactInformation from "@/components/contact/contactInformation/ContactInformation";
import './contact.css'

const Contact = () => {
  return (
    <section className="contact-section">

    <div className="contact-container">
      <ContactForm />
      <ContactInformation />
    </div>
    </section>
  )
}

export default Contact
