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
          <a href="https://www.facebook.com/profile.php?id=100093181887032">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/contactjgrcv/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://twitter.com/contactjgrcv">
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
          <a href="https://www.facebook.com/profile.php?id=100093181887032">Facebook</a>
          <a href="https://www.instagram.com/contactjgrcv/">Instagram</a>
          <a href="https://twitter.com/contactjgrcv">Twitter</a>
        </div>
        <div>
          <h4>Comunicate</h4>
          <a href="/contact">Contactanos</a>
          <a href="/contact">Correo Electronico</a>
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
