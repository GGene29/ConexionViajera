import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>¡Envíanos un mensaje!</h1>
      <form >
        <input placeholder="Nombre" />
        <input placeholder="Correo" />
        <input placeholder="Genero" />
        <textarea placeholder="Mensaje" rows="4"></textarea>
        <button>Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default ContactForm;
