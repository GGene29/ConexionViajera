<h1 align="center">Conexión Viajera</h1>

<h4 align="center">Esta es una página web desarrollada para la empresa Conexión Viajera, dedicada a la Publicidad Turística en el Municipio Juan German Roscio en San Juan de los Morros.</h4>

<br/>

### Estructura de carpetas

<br/>

```bash
├──ConexionViajera (root)
│  ├── client (frontend folder)
│  │  └── public
│  │  └── src
│  ├── controllers
│  ├── models
│  ├── routes
```

<br/>

### 👨‍💻👩‍💻 Para desarrolladores

<br/>

* Asegúrense estar posicionados en el root del proyecto: `./conexionviajera/`

<br/>

* Para instalar todas las dependencias, usen el comando:
  ```
  npm run install-all
  ```

<br/>

* Una vez instaladas las dependencias, deben iniciar el proyecto con el comando:

	```
	npm run dev
	```
<br/>

### 🏓 La API

La **API** esta desarrollada en un servidor `Express.js`, el cual se inicia junto con el servidor frontend al hacer uso del `npm run dev`.

Por defecto el **puerto** del servidor es `8080` en el modo `development`, pero podría ser cualquier otro al entrar en producción, haciendo uso de la variable de entorno `PORT`.

El archivo `vite.config.js` ya esta configurado para redireccionar todas las consultas `HTTP` a la dirección URL `http://localhost:8080` que pasen por el endpoint:

```http
/api
```

#### Como usarla

La **API** responde a dos de los métodos `HTTP` más usados: `GET` y `POST`. Todas las respuestas devolverán datos en `json`

##### GET

El método `GET` de esta **API**, solo tiene un uso:

Obtener todos los comentarios existentes.

La manera de hacerlo sería la siguiente:

<div style="background-color: #202329; padding: 2em; border-radius: 6px 6px 0 0; color: #abb2bf;">
	<span style="padding-right: .5em; color: #4cff8f; font-weight: 700; user-select: none">GET</span>
	<span>/api/reviews</span>
</div>

<div style="background-color: #202329; padding: 2em; border-radius: 0 0 6px 6px; color: #abb2bf; margin-top: 2px;">
	<span>
		<p style="margin:0;padding:0;">{</p>
			<p style="margin:0;padding:0;padding-left: 1em;"><span style="color: #ff79c6;">"status"</span>: <span style="color: #f08d49;">200</span>,</p>
			<p style="margin:0;padding:0;padding-left: 1em;"><span style="color: #ff79c6;">"success"</span>: <span style="color: #66d9ef;">true</span>,</p>
			<p style="margin:0;padding:0;padding-left: 1em;">
				<span style="color: #ff79c6;">"content"</span>: [
					<p style="margin:0;padding:0;padding-left: 2em;">{</p>
						<p style="margin:0;padding:0;"><span style="color: #ff79c6; padding-left: 3em;">"name"</span>: <span style="color: #4cff8f;">"Jonaiker Jaspes"</span>,</p>
						<p style="margin:0;padding:0;"><span style="color: #ff79c6; padding-left: 3em;">"location"</span>: <span style="color: #4cff8f;">"Estado Aragua, Venezuela"</span>,</p>
						<p style="margin:0;padding:0;"><span style="color: #ff79c6; padding-left: 3em;">"review"</span>: <span style="color: #4cff8f;">"Fino 👍"</span></p>
					<p style="margin:0;padding:0;padding-left: 2em;">},</p>
					<span style="margin:0;padding:0;padding-left: 2em;">// ...</span>
				<p style="margin:0;padding:0;padding-left: 1em;">]</p>
		<p style="margin:0;padding:0;">}</p>
	</span style="margin:0;padding:0;">
</div>

##### POST

El método `POST` de esta **API**, solo tiene un uso:

Enviar a la base de datos la reseña del formulario.

La manera de hacerlo sería la siguiente:

<div style="background-color: #202329; padding: 2em; border-radius: 6px 6px 0 0; color: #abb2bf;">
	<span style="padding-right: .5em; color: #ffbc00; font-weight: 700; user-select: none">POST</span>
	<span>/api/reviews</span>
</div>

<div style="position: relative; background-color: #202329; padding: 2em; color: #abb2bf; margin-top: 2px;">
	<p style="font-weight: 700; user-select: none; opacity: 40%">BODY</p>
	<span>
		<p style="margin:0;padding:0;">{</p>
			<p style="margin:0;padding:0;padding-left: 1em;"><span style="color: #ff79c6;">"name"</span>: <span style="color: #4cff8f;">"Génesis Sumoza"</span>,</p>
			<p style="margin:0;padding:0;padding-left: 1em;"><span style="color: #ff79c6;">"review"</span>: <span style="color: #4cff8f;">"Malo 👎"</span>
		<p style="margin:0;padding:0;">}</p>
	</span style="margin:0;padding:0;">
</div>

<div style="background-color: #202329; padding: 2em; border-radius: 0 0 6px 6px; color: #abb2bf; margin-top: 2px;">
	<span>
		<p style="margin:0;padding:0;">{</p>
			<p style="margin:0;padding:0;padding-left: 1em;"><span style="color: #ff79c6;">"status"</span>: <span style="color: #f08d49;">200</span>,</p>
			<p style="margin:0;padding:0;padding-left: 1em;"><span style="color: #ff79c6;">"success"</span>: <span style="color: #66d9ef;">true</span>,</p>
			<p style="margin:0;padding:0;padding-left: 1em;">
				<span style="color: #ff79c6;">"content"</span>: [
					<p style="margin:0;padding:0;padding-left: 2em;">{</p>
						<p style="margin:0;padding:0;"><span style="color: #ff79c6; padding-left: 3em;">"name"</span>: <span style="color: #4cff8f;">"Génesis Sumoza"</span>,</p>
						<p style="margin:0;padding:0;"><span style="color: #ff79c6; padding-left: 3em;">"location"</span>: <span style="color: #4cff8f;">"Distrito Federal, Venezuela"</span>,</p>
						<p style="margin:0;padding:0;"><span style="color: #ff79c6; padding-left: 3em;">"review"</span>: <span style="color: #4cff8f;">"Malo 👎"</span></p>
					<p style="margin:0;padding:0;padding-left: 2em;">}</p>
				<p style="margin:0;padding:0;padding-left: 1em;">]</p>
		<p style="margin:0;padding:0;">}</p>
	</span style="margin:0;padding:0;">
</div>