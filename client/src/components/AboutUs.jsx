import "./DestinationStyles.css";
import Mountain1 from "../assets/2.jpg";
import Mountain2 from "../assets/43.jpg";
import Mountain3 from "../assets/6.jpg";

import Acercade from "./Acercade";
function AboutUs() {
  return (
    <div className="destinations">
      <h1>Conexíon Viajera</h1>
      
      <p>Los tours le dan la oportunidad de ver mucho, dentro de un marco de tiempo.</p>
      
      <Acercade
        className="first-dess"
        heading="Misión"
        text="Ofrecer experiencias de turismo ecológico de calidad y 
              responsabilidad en el municipio Juan Germán Roscio, 
              contribuyendo a la conservación de la biodiversidad, el respeto 
              a las culturas locales y el fomento de la economía social y 
              solidaria"
            img1={Mountain1}
            
      />
      <Acercade
        className="first-des-reverses"
        heading="Visión"
        text=" La Villa Olímpica Es un complejo deportivo que se encuentra en la ciudad capital del estado Guárico. Fue construida en 2007 para albergar algunas competencias de los Juegos Deportivos Nacionales Llanos 2007. Dentro de la Villa Olímpica se destaca el Domo Olímpico, un pabellón o gimnasio cubierto con capacidad para 5500 espectadores, que es la sede del equipo de baloncesto profesional Llaneros de Guárico."
        img1={Mountain3}
        
      />
      <Acercade
        className="first-des"
        heading="Misión"
        text="Ofrecer experiencias de turismo ecológico de calidad y 
              responsabilidad en el municipio Juan Germán Roscio, 
              contribuyendo a la conservación de la biodiversidad, el respeto 
              a las culturas locales y el fomento de la economía social y 
              solidaria"
            img1={Mountain1}
            
      />
      <br />
      <h1>Fundadores</h1>
      <Acercade
        className="first-des-reverse"
        heading="Génesis Sumoza"
        text=" El CEO o Director Ejecutivo, siendo la cara con algún accionista, trámites legales 
               y garantizando el crecimiento de la empresa; que su visión vaya más allá.
               Apoyo en el Departamento de Tecnología de la Información, encargado de 
               mantener la información, sustentabilidad y actualizaciones a nivel de software. 
               Y el funcionamiento de redes y todos los bienes tecnológicos (hardware)."
        img1={Mountain3}
       
      />
      <Acercade
        className="first-des"
        heading="Daniel de Freitas"
        text="El CFO o Director Financiero, por experiencia y mayor nivel de responsabilidad, 
        garantizando las finanzas de la empresa.Encargado de la gestión de las finanzas de la empresa en el Departamento de Finanzas."
            img1={Mountain1}
            
      />
      <Acercade
        className="first-des-reverse"
        heading="José Marquez"
        text=" El COO o Director de Operaciones, garantizando la funcionalidad y cumplimiento 
                de todos los procesos que debe ejercer la empresa.
                Encargado del Departamento de Investigación y Análisis, gestionando toda la 
                información que exista y aportar la que más beneficie y fortalezca a la empresa."
        img1={Mountain3}
        
      />
      <Acercade
        className="first-des"
        heading="José Sumoza"
        text="Encargado del Departamento de Marketing, tomando las decisiones a nivel de 
              publicidad y mercadeo."
            img1={Mountain1}
            
      />
      <Acercade
        className="first-des-reverse"
        heading="Juan Pablo Valera"
        text=" Encargado del Departamento de Marketing, tomando las decisiones a nivel de 
               publicidad y mercadeo."
        img1={Mountain3}
        
      />
      <Acercade
        className="first-des"
        heading="Jonaiker Jaspe"
        text="En cargado del Departamento de Tecnología de la Información, siendo apoyado 
              por Keving Andrades y Génesis Sumoza."
            img1={Mountain2}
            
      />
      <Acercade
        className="first-des-reverse"
        heading="Keving Andrades"
        text=" Apoyo en el Departamento de Tecnología de la Información, encargado de 
               mantener la información, sustentabilidad y actualizaciones a nivel de software. 
               Y el funcionamiento de redes y todos los bienes tecnológicos (hardware)"
        img1={Mountain3}
        
      />
    </div>
  );
}

export default AboutUs;
