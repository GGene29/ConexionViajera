import Mountain1 from "../assets/2.jpg";
import Mountain2 from "../assets/14.jpg";
import Mountain3 from "../assets/6.jpg";
import Mountain4 from "../assets/7.jpg";
import Mountain5 from "../assets/16.jpg";
import Mountain6 from "../assets/puerta.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Destinos Populares</h1>
      <p>Los tours le dan la oportunidad de ver mucho, dentro de un marco de tiempo.</p>
      
      <DestinationData
        className="first-des"
        heading="San Juan de los Morros"
        text="San Juan de los Morros es una ciudad de Venezuela, capital del estado Guárico. Está ubicada al centro-norte del país y es la puerta de entrada a los Llanos Centrales. Su nombre se debe a las impresionantes montañas que la rodean, conocidas como Los Morros de San Juan, que son un monumento natural."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Ciudad  Olímpica"
        text=" La Villa Olímpica Es un complejo deportivo que se encuentra en la ciudad capital del estado Guárico. Fue construida en 2007 para albergar algunas competencias de los Juegos Deportivos Nacionales Llanos 2007. Dentro de la Villa Olímpica se destaca el Domo Olímpico, un pabellón o gimnasio cubierto con capacidad para 5500 espectadores, que es la sede del equipo de baloncesto profesional Llaneros de Guárico."
        img1={Mountain3}
        img2={Mountain4}
      />
      <DestinationData
        className="first-des"
        heading="Monumento a la Batalla de la Puerta"
        text="Es un arco conmemorativo construido en 1926 por orden del dictador venezolano Juan Vicente Gómez, en honor a las batallas que tuvieron lugar en La Puerta en 1814, 1901 y 1902. El monumento se encuentra en el límite entre los estados de Aragua y Guárico, donde el río Guárico atraviesa las montañas.Es un gran pórtico con el escudo nacional a ambos lados y el escudo del estado en la parte superior. Tiene valor histórico y turístico, ya que marca el sitio de eventos importantes en la Guerra de Independencia de Venezuela y las guerras civiles de los siglos XIX y XX."
        img1={Mountain5}
        img2={Mountain6}
      />
    </div>
  


  );
};

export default Destination;
