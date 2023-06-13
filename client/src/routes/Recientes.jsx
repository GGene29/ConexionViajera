import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/42.jpg";
 import Footer from "../components/Footer";
import Trips from "../components/Trips";


function Recientes() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Recientes"
        btnClass="hide"
      />
      <Trips/>
      <Footer/>
    </>
  );
}

export default Recientes;
