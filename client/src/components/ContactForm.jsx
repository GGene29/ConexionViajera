import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>¡Envíanos un mensaje!</h1>
      <p className="txt">A Nuestro Correo Electronico.</p>
      <form >
        <input type="text" placeholder="Nombre"  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required/>
        <input  type="email" placeholder="Correo" pattern="^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$" required />
        <select name="Sexo" required>
        <option value="" selected>Genero</option>
        <option value="Hombre">Hombre</option>
        <option value="Mujeres">Mujeres</option>
        </select>
        <textarea placeholder="Mensaje" rows="4" required></textarea>
        <button>Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default ContactForm;
