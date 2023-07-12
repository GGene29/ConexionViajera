import "./DestinationStyles.css";
import Mountain2 from "../assets/45.jpg";
import Mountain3 from "../assets/44.jpg";
import Mountain5 from "../assets/jgr_cv.jpg"
import Mountain6 from "../assets/50.jpg"
import Mountain7 from "../assets/51.jpg"
import Mountain8 from "../assets/49.png"
import Mountain9 from "../assets/55.jpg"
import Mountain10 from "../assets/58.jpg"
import Mountain11 from "../assets/57.jpg"


import Acercade from "./Acercade";
function AboutUs() {
  return (
    <div className="destinations">
      <h1>Conexíon Viajera</h1>
      
      <p>Los tours le dan la oportunidad de ver mucho, dentro de un marco de tiempo.</p>
        <Acercade
        className="first-des-reverses"
        heading="Misión"
        text=" Ofrecer experiencias de turismo ecológico de calidad y 
                responsabilidad en el municipio Juan Germán Roscio, 
                contribuyendo a la conservación de la biodiversidad, el respeto 
                a las culturas locales y el fomento de la economía social y 
                solidaria."
        img1={Mountain8}
        
      />
      <Acercade
        className="first-dess"
        heading=" Visión"
        text="Ser una empresa líder y referente en el sector del turismo 
              ecológico en el municipio Juan Germán Roscio, reconocida por 
              su compromiso con la sostenibilidad ambiental, social y 
              económica, y por brindar servicios innovadores y 
              personalizados que superen las expectativas de sus clientes."
            img1={Mountain5}
            
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
        img1={Mountain10}
       
      />
      <Acercade
        className="first-des"
        heading="Daniel de Freitas"
        text="El CFO o Director Financiero, por experiencia y mayor nivel de responsabilidad, 
        garantizando las finanzas de la empresa.Encargado de la gestión de las finanzas de la empresa en el Departamento de Finanzas."
            img1={Mountain6}
            
      />
      <Acercade
        className="first-des-reverse"
        heading="José Marquez"
        text=" El COO o Director de Operaciones, garantizando la funcionalidad y cumplimiento 
                de todos los procesos que debe ejercer la empresa.
                Encargado del Departamento de Investigación y Análisis, gestionando toda la 
                información que exista y aportar la que más beneficie y fortalezca a la empresa."
        img1={Mountain11}
        
      />
      <Acercade
        className="first-des"
        heading="José Sumoza"
        text="Encargado del Departamento de Marketing, tomando las decisiones a nivel de 
              publicidad y mercadeo."
            img1={Mountain7}
            
      />
      <Acercade
        className="first-des-reverse"
        heading="Juan Pablo Valera"
        text=" Encargado del Departamento de Marketing, tomando las decisiones a nivel de 
               publicidad y mercadeo."
        img1={Mountain9}
        
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
