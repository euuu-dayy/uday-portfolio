import ContactContent from "../components/contact/ContactContent";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="
        relative
        py-24
        px-4
        sm:px-6
        bg-gradient-to-b
        from-[#050816]
        to-black
        overflow-hidden
      "
    >
      <ContactContent />
    </section>
  );
};

export default ContactSection;
