# Uso de middlewares en ExpressJS
La funciones *middleware* son aquellas que tienen acceso a los objetos *request* (**req**), objetos *response* (**res**) y la función *next* en el ciclo de *request-response*.

La siguiente función de middleware se denota normalmente con una variable denominada **next**

Las funciones de middleware pueden realizar las siguientes tareas:
  * Ejecutar cualquier código.
  * Realizar cambios en la solicitud y los objetos de respuesta.
  * Finalizar el ciclo de solicitud/respuestas.
  * Invocar el siguiente middleware en la pila.

*El siguiente ejemplo muestra los elementos de una llamada a función de middleware:*


![](http://expressjs.com/images/express-mw.png)



- Método HTTP para el que se aplica la función de middleware.
  ```javascript
  app.get
  ```
- Vía de acceso (ruta) para la que se aplica la función de middleware.
  ```javascript
  '/'
  ```
- La función de middleware.
  ```javascript
  function()
  ```
- Argumento de solicitud HTTP a la función de middleware, denominado "req" por convención.
  ```javascript
  req
  ```
- Argumento de respuesta HTTP a la función de middleware, denominado "res" por convención.
```javascript
  res
```
- Argumento de devolución de llamada a la función de middleware, denominado "next" por convención.
```javascript
  next
```
A continuación, se muestra un ejemplo de una aplicación Express simple, “Hello World”, para la que definirá dos funciones de middleware:

```javascript
    var express = require('express');
    var app = express();

    app.get('/', function (req, res) {
      res.send('Hello World!');
    });

    app.listen(3000);
```
Esta pequeña aplicación Express, envía una respuesta con el mensaje 'Hello World' por el puerto 3000, mediante Express.

* Un ejemplo completo sobre el uso de [middlewares en ExpressJS](https://github.com/ULL-ESIT-DSI-1617/estudiar-las-rutas-en-expressjs-aitor-nestor-omar-35l2/blob/master/src/medium_scripts/next-sample.js)

### Desarrollo
Este es un ejemplo simple de una función de middleware denominada “myLogger”. Esta función simplemente imprime “LOGGED” cuando una solicitud de la aplicación pasa por ella. La función de middleware se asigna a una variable denominada myLogger.
```javascript
var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};
```
Para cargar la función de middleware, llame a app.use(), especificando la función de middleware. Por ejemplo, el siguiente código carga la función de middleware myLogger antes de la ruta a la vía de acceso raíz (/).
```javascript
var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);
```
La aplicación ahora utiliza la función de middleware requestTime. Asimismo, la función de devolución de llamada de la ruta de vía de acceso raíz utiliza la propiedad que la función de middleware añade a req (el objeto de solicitud).
```javascript
var express = require('express');
var app = express();

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

app.get('/', function (req, res) {
  var responseText = 'Hello World!';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText);
});

app.listen(3000);
```

# Uso de middlewares en ExpressJS (II)

Express es una infraestructura web de direccionamiento y middleware que tiene una funcionalidad mínima propia: una aplicación Express es fundamentalmente una serie de llamadas a funciones de middleware.

Las funciones de middleware son funciones que tienen acceso al objeto de solicitud (req), al objeto de respuesta (res) y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación. La siguiente función de middleware se denota normalmente con una variable denominada next.

### Middleware de nivel de aplicación
Enlace el middleware de nivel de aplicación a una instancia del objeto de aplicación utilizando las funciones app.use() y app.METHOD(), donde METHOD es el método HTTP de la solicitud que maneja la función de middleware (por ejemplo, GET, PUT o POST) en minúsculas.

Este ejemplo muestra una función de middleware sin ninguna vía de acceso de montaje. La función se ejecuta cada vez que la aplicación recibe una solicitud.

```javascript
var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
```

Este ejemplo muestra una función de middleware montada en la vía de acceso /user/:id. La función se ejecuta para cualquier tipo de solicitud HTTP en la vía de acceso /user/:id.

```javascript
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});
```
Este ejemplo muestra una subpila de middleware que maneja solicitudes GET a la vía de acceso /user/:id.
```javascript
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id == 0) next('route');
  // otherwise pass the control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('regular');
});

// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function (req, res, next) {
  res.render('special');
});
```

### Middleware de nivel de direccionador
El middleware de nivel de direccionador funciona de la misma manera que el middleware de nivel de aplicación, excepto que está enlazado a una instancia de express.Router().

```javascript
var router = express.Router();
```
Cargue el middleware de nivel de direccionador utilizando las funciones router.use() y router.METHOD().

El siguiente código de ejemplo replica el sistema de middleware que se ha mostrado anteriormente para el middleware de nivel de aplicación, utilizando el middleware de nivel de direccionador:
```javascript
var app = express();
var router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id == 0) next('route');
  // otherwise pass control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('regular');
});

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id);
  res.render('special');
});

// mount the router on the app
app.use('/', router);
```

### Middleware de manejo de errores
Defina las funciones de middleware de manejo de errores de la misma forma que otras funciones de middleware, excepto con cuatro argumentos en lugar de tres, específicamente con la firma (err, req, res, next):
```javascript
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

### Middleware incorporado

A continuación, se muestra un ejemplo de uso de la función de middleware express.static con un objeto de opciones elaboradas:
```javascript
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}

app.use(express.static('public', options));
```
### Middleware de terceros

Utilice el middleware de terceros para añadir funcionalidad a las aplicaciones Express.

Instale el módulo Node.js para la funcionalidad necesaria y cárguelo en la aplicación a nivel de aplicación o a nivel de direccionador.

El siguiente ejemplo ilustra la instalación y carga de la función de middleware de análisis de cookies cookie-parser.

Para ello, debemos instalar **cookie parser**

```shell
$ npm install cookie-parser
```

```javascript
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());
```
