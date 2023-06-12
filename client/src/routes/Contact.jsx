import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/4.jpg";
// import Footer from "../components/Footer";
// import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
<Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contacto"
    

        btnClass="hide"
      />
    </>
  );
}

export default Contact;
