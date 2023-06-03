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

```js
/api
```

#### Como usarla

La **API** responde a dos de los métodos `HTTP` más usados: `GET` y `POST`. Todas las respuestas devolverán datos en `json`

##### GET

El método `GET` de esta **API**, solo tiene un uso:

Obtener todos los comentarios existentes.

La manera de hacerlo sería la siguiente:

```js
GET /api/reviews
```

```js
{
	"status": 200,
	"success": true
	"content": [
		{
			"name": "Jonaiker Jaspes",
			"location": "Estado Aragua, Venezuela"
			"review": "Fino 👍"
		},
		// ...
	]
}
```

##### POST

El método `POST` de esta **API**, solo tiene un uso:

Enviar a la base de datos la reseña del formulario.

La manera de hacerlo sería la siguiente:

```js
POST /api/reviews
```

```js
{
	"name": "Génesis Sumoza",
	"review": "Malo 👎"
}
```

```js
{
	"status": 200,
	"success": true
	"content": [
		{
		"name": "Génesis Sumoza",
		"location": "Distrito Federal, Venezuela",
		"review": "Malo 👎"
		}
	]
}
```