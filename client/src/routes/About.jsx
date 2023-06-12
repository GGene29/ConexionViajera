import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/6.jpg";
// import Footer from "../components/Footer";
// import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
       <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Tu viaje Tu historia"
        text="Elige tu destino favorito."
        buttonText="Plan de Viaje"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default About;
