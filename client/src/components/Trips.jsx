import "./TripStylep.css";
import TripDatas from "./TripDatas";
import Trip1 from "../assets/22.jpg";
import Trip2 from "../assets/21.jpg";
import Trip3 from "../assets/31.jpg";
import Trip4 from "../assets/14.jpg";
import Trip5 from "../assets/20.jpg";
import Trip6 from "../assets/37.jpg";
import Trip7 from "../assets/40.jpg";
import Trip8 from "../assets/27.jpg";
import Trip9 from "../assets/18.jpg";

function Trips() {
  return (
    <div className="trip">
      <div className="trip-text">
        <h1>Plan de Viajes</h1>
      <p>Descubre todo lo nuevo que tenemos utilizando Google Maps.</p>
      </div>
        <TripDatas
          image={Trip1}
          heading="El Castrero"
          text="Río que no atraviesa la ciudad de San Juan de los Morros, pero tiene un balneario fluvial llamado El Castrero. Es uno de los principales atractivos turísticos de la zona. Su principal atractivo son sus aguas cristalinas que provienen del pico Platillón y su clima frío, diferente al resto de la región.El balneario ha sido rehabilitado por el gobierno regional y ofrece servicios como estacionamiento, seguridad, alimentación y recreación"
        />
        <TripDatas
          image={Trip2}
          heading="Hotel Aguas Termales"
          text="Se construyó durante la presidencia de Marcos Pérez Jiménez y es parte de la historia de la ciudad. Cuenta con 70 amplias y cómodas habitaciones, todas con aire acondicionado, televisión por cable, baño y agua caliente. También cuenta con piscinas termales, spa, restaurante, bar y jardín3. Las aguas termales son sulfurosas, alcalinas, boradas, de color azulado, con una temperatura promedio de 33,5 °C."
        />
        <TripDatas
          image={Trip3}
          heading="El Platillon"
          text="El Monumento natural Pico Platillón o Cerro Platillón es una formación de montaña ubicada en el extremo norte del estado Guárico, Venezuela.A una altura oficial de 1.930 m s. n. m.2, el Pico Platillón es la montaña más alta en Guárico. Es protegido como monumento natural por decreto publicado en Gaceta Oficial de Venezuela. El Pico Platillón está ubicado en el corazón de una fila montañosa del Monumento Natural Juan Germán Roscio, al oeste de San Juan de los Morros. "
        />
        <TripDatas
          image={Trip4}
          heading="Parque Los Morros"
          text="Existe un monumento dedicado a ella, ubicado en el Mirador Teobaldo Mieres, que ofrece una vista panorámica de la ciudad y los Morros. El monumento fue inaugurado en 2010 y consiste en una estatua de bronce de la Beata Candelaria con un niño en brazos. Se le honra con un monumento en San Juan de los Morros, que ofrece una vista panorámica de la ciudad y los Morros."
        />
        <TripDatas
          image={Trip5}
          heading="San Juan Bautista "
          text="El Monumento a San Juan Bautista es una colosal escultura conmemorativa de Juan el Bautista, realizada completamente en concreto, levantada a un costado de la plaza Bolívar de la ciudad de San Juan de los Morros, en Venezuela.Comúnmente llamado Sanjuanote , cuenta con 19,8 metros de altura, es una de las estatuas más altas de Venezuela, luego de la construcción del monumento a la Madre Candelaria de San José."
        />
        <TripDatas
          image={Trip6}
          heading="Casa la Cultura"
          text="Ubicada en la avenida Bilívar de la ciudad, esta casa de la cultura es la más importante del estado Guarico, fue inaugurara en el año 1970.Su nombre es en honor al Dr. Sanjaunero Víctor Manuel Ovalles. En esa casa de la cultura se realizan actividades didácticas como taller de expresión y motivación infantil, teatro, taller de pintura, taller de cerámica. Cuenta con una biblioteca, escuela de música, galería de artes y sala de conferencia.
"
        />
        <TripDatas
          image={Trip7}
          heading="Ciudad Olímpica "
          text="Existe un monumento dedicado a ella, ubicado en el Mirador Teobaldo Mieres, que ofrece una vista panorámica de la ciudad y los Morros. El monumento fue inaugurado en 2010 y consiste en una estatua de bronce de la Beata Candelaria con un niño en brazos. Se le honra con un monumento en San Juan de los Morros, que ofrece una vista panorámica de la ciudad y los Morros."
        />
        <TripDatas
          image={Trip8}
          heading="Cerro de Santa Rosa"
          text="Es una Formación montañosa ubicada al suroeste de San Juan de los Morros, entre la Av. José Félix Ribas y la Carretera Nacional vía los Llanos elevándose a más de 700 msnm. Es uno de los principales pulmones de San Juan de los Morros, cuenta con una gran variedad de flora y fauna. El cerro de puede apreciar desde todas las partes de la ciudad, en él se encuentra el mirador turístico Teobaldo Mieres lo cual se accede a través de la calle Simón Rodríguez que parte desde la avenida los llanos."
        />
        <TripDatas
          image={Trip9}
          heading="Monumento a la Bandera"
          text="Es una escultura de una bandera hecha de metal y concreto. Fue construido en 1998 por el artista José Antonio Dávila y representa la identidad nacional y la soberanía de Venezuela. Se encuentra ubicado en la calle Los Placeres, entre la avenida Rómulo Gallegos y la avenida Miranda. Es uno de los principales símbolos de la ciudad, junto con el monumento natural Arístides Rojas o Los Morros de San Juan."
        />
    
    </div>

  );
}

export default Trips;
