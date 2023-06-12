import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/10.jpg";
// import Footer from "../components/Footer";
// import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Servicio"
    

        btnClass="hide"
      />
    </>
  );
}

export default Service;
