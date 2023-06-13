import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/23.jpg";
import Trip2 from "../assets/35.jpg";
import Trip3 from "../assets/25.jpg";

function Trip() {
  return (
    <div className="trip">
      <div className="trip-text">
      <h1>Viajes Recientes</h1>
      <p>Puede descubrir destinos únicos utilizando Google Maps.</p>
      </div>
        <TripData
          image={Trip1}
          heading="El Castrero"
          text="Río que no atraviesa la ciudad de San Juan de los Morros, pero tiene un balneario fluvial llamado El Castrero. Es uno de los principales atractivos turísticos de la zona. Su principal atractivo son sus aguas cristalinas que provienen del pico Platillón y su clima frío, diferente al resto de la región.El balneario ha sido rehabilitado por el gobierno regional y ofrece servicios como estacionamiento, seguridad, alimentación y recreación"
        />
        <TripData
          image={Trip2}
          heading="Hotel Aguas Termales"
          text="Se construyó durante la presidencia de Marcos Pérez Jiménez y es parte de la historia de la ciudad. Cuenta con 70 amplias y cómodas habitaciones, todas con aire acondicionado, televisión por cable, baño y agua caliente. También cuenta con piscinas termales, spa, restaurante, bar y jardín3. Las aguas termales son sulfurosas, alcalinas, boradas, de color azulado, con una temperatura promedio de 33,5 °C."
        />
        <TripData
          image={Trip3}
          heading="Beata Candelaria de San José"
          text="Existe un monumento dedicado a ella, ubicado en el Mirador Teobaldo Mieres, que ofrece una vista panorámica de la ciudad y los Morros. El monumento fue inaugurado en 2010 y consiste en una estatua de bronce de la Beata Candelaria con un niño en brazos. Se le honra con un monumento en San Juan de los Morros, que ofrece una vista panorámica de la ciudad y los Morros."
        />
    </div>

  );
}

export default Trip;
