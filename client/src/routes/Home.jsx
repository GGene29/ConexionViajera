import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import HomeImg from "../assets/Sanjuan.jpg";

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
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
