# cookie

Analizador de cookies y serializador HTTP básico para servidores HTTP.


## Primeros  pasos

* Instalación
```
npm install cookie
```
* API
```javascript
var cookie = require('cookie');
```


## cookie parse

```javascript
cookie.parse(str, options)
```


Analiza una cadena de encabezado de cookies HTTP y devuelve un objeto de todos los pares nombre-valor de cookie. El argumento str es la cadena que representa un valor de encabezado Cookie y options es un objeto opcional que contiene opciones de análisis adicionales.


**Ejemplo:**

```javascript
var cookies = cookie.parse('foo=bar; equation=E%3Dmc%5E2');
// { foo: 'bar', equation: 'E=mc^2' }
```

Para información a cerca de las distintas opciones del .parse vaya a la guía en [npm](https://www.npmjs.com/package/cookie)


## cookie serialize


```javascript
cookie.serialize(name, value, options)
```

Serializa un par nombre-valor de cookie en una cadena de encabezado Set-Cookie. El argumento name es el nombre de la cookie, el argumento value es el valor para establecer la cookie y el argumento options es un objeto opcional que contiene opciones adicionales de serialización.


```javascript
var setCookie = cookie.serialize('foo', 'bar');
// foo=bar
```

Para información a cerca de las distintas opciones del .serialize vaya a la guía en [npm](https://www.npmjs.com/package/cookie)


Visite los ejemplos [aquí](https://github.com/ULL-ESIT-DSI-1617/estudiar-cookies-y-sessions-en-expressjs-aitor-nestor-omar-35l2v2/blob/master/src/cookie.js)
