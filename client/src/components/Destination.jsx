import Mountain1 from "../assets/2.jpg";
import Mountain2 from "../assets/14.jpg";
import Mountain3 from "../assets/6.jpg";
import Mountain4 from "../assets/7.jpg";
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
        heading="Villa Olímpica"
        text=" Villa Olímpica Es un complejo deportivo que se encuentra en la ciudad capital del estado Guárico. Fue construida en 2007 para albergar algunas competencias de los Juegos Deportivos Nacionales Llanos 2007. Dentro de la Villa Olímpica se destaca el Domo Olímpico, un pabellón o gimnasio cubierto con capacidad para 5500 espectadores, que es la sede del equipo de baloncesto profesional Llaneros de Guárico."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  


  );
};

export default Destination;
