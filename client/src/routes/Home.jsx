// import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/Sanjuan.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Tu viaje Tu historia"
        text="Elige tu destino favorito."
        buttonText="Plan de Viaje"
        url="/recientes"
        btnClass="show"
      />
      <Destination/>
      <Trip />
      <Footer/>
    </>
  );
}

export default Home;
