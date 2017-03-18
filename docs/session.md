# Sesiones en Express

Las sesiones solo las podemos obtener del objeto **req**, antes de empezar debemos añadir la siguiente linea a nuestro codigo a modo de configuración

```js
app.use(express.session({ secret: 'Sesion de prueba'}));
```

EL metodo anterior recibe como parametro una opción llamada "secret", esto no tiene ningun valor, es solo para crear un hash con esta cadena de caracteres.

Veamos un ejemplo mas completo de como hacer uso de las sesiones partiendo del codigo usado en cookies con express.

```js
app.get('/name/:name', function(req, res) {

  req.session.name = req.params.name;

  res.send('<p>Vea el valor de esta sesión <a href="/name">aquí</a></p>');

});


app.get('/name', function (req, res) {
  res.send(req.session.name);
});

```
Un ejemplo de [sesiones en ExpressJS](https://github.com/ULL-ESIT-DSI-1617/estudiar-cookies-y-sessions-en-expressjs-aitor-nestor-omar-35l2v2/blob/master/src/session-express.js)
