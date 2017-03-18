# Cookie  y Sesiones en ExpressJS

Para hacer uso de las cookies en express tenemos que hacer uso del cookieParser en nuestro servidor, con una línea similar a la siguiente.

```js app.use(express.cookieParser());```

Ahora bien , necesitamos crear una cookie, para ello usamos **res** que es el objeto response y hacemos un res.cookie, luego deberemos hacer ```es.cookie('name','valor_cookie')```

Veamos un fragmento de codigo con lo comentado anteriormente:

```js
app.get('/name/:name', function(req, res) {

  res
  .cookie('name', req.params.name)
  .send('<p>
  Vea el valor del cookie <a href="/name">aquí</a>

</p>');

});

```

Un ejemplo del [uso de las cookies en ExpressJS](https://github.com/ULL-ESIT-DSI-1617/estudiar-cookies-y-sessions-en-expressjs-aitor-nestor-omar-35l2v2/blob/master/src/cookies-express.js)

Para poder comprobar que efectivamente estabamos en la cookie del nombre que le hemos dado (que en este caso es lo que pongamos como :name) debemos abrir la terminal de nuestro navegador y ejecutar el comando siguiente:

```js
> document.cookie
"name=aitor"
```

Por otro lado, si queremos evitar teclear el comando anterior en la terminal podemos crear la ruta /name para que nos muestre la cookie que tenemos, sería de la siguiente manera:

```js
app.get('/name', function (req, res) {
  res.send(req.cookies.name);
});
```
