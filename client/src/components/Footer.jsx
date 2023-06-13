import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Conexión Viajera</h1>
          <p>Conoce tu proximo Destino.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Proyectos</h4>
          <a href="/recientes">Recientes</a>
          <a href="/service">Viajes Recientes</a>
        </div>
        <div>
          <h4>Comunidad</h4>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Comunicate</h4>
          <a href="/">Reseñas</a>
          <a href="/">Correo</a>
        </div>
        <div>
          <h4>Otros</h4>
          <a href="/">Términos y Condiciones</a>
          <a href="/">Política de privacidad</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
