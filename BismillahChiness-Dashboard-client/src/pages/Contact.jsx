import ContactPage from "../components/Contact/ContactPage";
import ContactPageMap from "../components/Contact/ContactPageMap";
import ContactPageSTeam from "../components/Contact/ContactPageSTeam";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-0">
      <ContactPageMap />
      <ContactPageSTeam />
      <ContactPage />
    </div>
  );
};

export default Contact;
