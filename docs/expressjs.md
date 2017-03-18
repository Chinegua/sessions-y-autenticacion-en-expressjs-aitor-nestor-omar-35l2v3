
# Primeros pasos en ExpressJS


## Instalando ExpressJS


Suponiendo que ya haya instalado Node.js, cree un directorio que contenga su aplicación y haga que sea su directorio de trabajo.

Usa el comando npm init para crear el fichero package.json para tu aplicación.

Ahora instalamos express en la aplicación

```
npm install express
```

Para añadirlo a las dependencias `--save`



## Introducción a ExpressJS

Direccionamiento se refiere a determinar cómo una aplicación responde a una solicitud de cliente a un extremo determinado, que es un URI (o ruta) y un método de solicitud HTTP específico (GET, POST, etc.).
Cada ruta puede tener una o más funciones del manejador, que se ejecutan cuando la ruta es correspondida
La definición de ruta tiene la siguiente estructura

```javascript
app.METHOD(PATH, HANDLER)
```

Dónde:

  * app es una instancia de express.
  * METHOD es un método de solicitud HTTP, en minúsculas.
  * PATH es una ruta de acceso en el servidor.
  * HANDLER es la función ejecutada cuando se compara la ruta.


__Ejemplos:__

Responda con Hello World! en la página inicial:
```javascript
app.get('/', function (req, res) {
  res.send('Hello World!')
})
```
* Un ejemplo funcional del [método de solicitud GET](https://github.com/ULL-ESIT-DSI-1617/estudiar-las-rutas-en-expressjs-aitor-nestor-omar-35l2/blob/master/src/basic_scripts/b1-get.js)

Responda a la solicitud POST en la ruta raíz (/), la página de inicio de la aplicación:
```javascript
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```
* Un ejemplo funcional del [método de solicitud POST](https://github.com/ULL-ESIT-DSI-1617/estudiar-las-rutas-en-expressjs-aitor-nestor-omar-35l2/blob/master/src/basic_scripts/b2-post.js)

Responda a una solicitud PUT en la ruta /user:
```javascript
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```
* Un ejemplo funcional del [método de solicitud PUT](https://github.com/ULL-ESIT-DSI-1617/estudiar-las-rutas-en-expressjs-aitor-nestor-omar-35l2/blob/master/src/basic_scripts/b3-put.js)

Responda a una solicitud DELETE en la ruta /user:

```javascript
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```
* Un ejemplo funcional del [método de solicitud DELETE](https://github.com/ULL-ESIT-DSI-1617/estudiar-las-rutas-en-expressjs-aitor-nestor-omar-35l2/blob/master/src/basic_scripts/b4-delete.js)

* Ejemplo con los diferentes [métodos de solicitud HTTP](https://github.com/ULL-ESIT-DSI-1617/estudiar-las-rutas-en-expressjs-aitor-nestor-omar-35l2/blob/master/src/basic_scripts/b_all.js) en ExpressJS

Para obtener más detalles sobre el direccionamiento, consulte la [guía](express_avanzado.md)
