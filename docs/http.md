# HTTP Cookie

Una cookie HTTP (cookie web, cookie del navegador) es un pequeño fragmento de datos que un servidor envía al navegador web del usuario, que puede almacenarlo y devolverlo junto con la siguiente solicitud al mismo servidor.

Por lo general, se utiliza para saber si dos solicitudes procedían del mismo navegador, lo que permite mantener un usuario conectado, por ejemplo.

***


Las cookies se utilizan principalmente para estos tres propósitos:

  * Gestión de sesiones (inicios de sesión de usuarios, carritos de compras)
  * Personalización (preferencias del usuario)
  * Seguimiento (análisis del comportamiento del usuario)



Las cookies también se han utilizado para el almacenamiento general del lado del cliente. Si bien este uso podría haber sido considerado legítimo en un momento en que no había otra forma de almacenar datos en el lado del cliente, ya no es el caso, hoy en día, donde los navegadores web son capaces de utilizar varias API de almacenamiento.

Las API nuevas a considerar para el almacenamiento local son la API de almacenamiento Web (**localStorage** y **sessionStorage**) y **IndexedDB**.


## Creando cookies

Al recibir una petición HTTP, un servidor puede enviar un encabezado Set-Cookie con la respuesta.

La cookie normalmente se almacena en el navegador y, posteriormente, se envía el valor de la cookie junto con cada solicitud hecha al mismo servidor que el contenido de un encabezado HTTP de Cookie.

Además, se puede especificar un retraso de caducidad así como restricciones a un dominio y una ruta específicos, limitando el tiempo y el sitio al que se envía la cookie.


## Set-cookie

El encabezado de respuesta HTTP [Set-Cookie](set-cookie.md) se utiliza para enviar cookies desde el servidor al agente de usuario (navegador). Una cookie sencilla se puede configurar de la siguiente manera:


```
Set-Cookie: <cookie-name>=<cookie-value>
```

El servidor le dice al cliente que almacene una cookie. La respuesta enviada al navegador contendrá el encabezado Set-Cookie y el navegador almacenará la cookie :


```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]
```

Ahora, con cada nueva solicitud al servidor, el navegador enviará todas las cookies previamente almacenadas al servidor usando el encabezado Cookie:


```
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```


## Cookies permanentes

En lugar de expirar cuando el cliente esté cerrado, las cookies permanentes caducan en una fecha específica (expiran) o después de un período de tiempo específico (Max-Age):

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

## Seguridad en cookies y HttpOnly cookies

Una cookie segura sólo se enviará al servidor cuando se realice una solicitud utilizando SSL y el protocolo HTTPS.

Para evitar ataques de secuencias de comandos entre sitios (XSS), las cookies HttpOnly
no son accesibles a través de JavaScript a través de la propiedad Document.cookie.  

Cuando no necesitamos las cookies disponibles en javascript, podemos indiciarle el flag de HttpOnly

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly

```


##  Acceso JavaScript mediante Document.cookies

También se pueden crear nuevas cookies con la propiedad Document.cookie y si no se establece el indicador **HttpOnly**, también se puede acceder a las cookies existentes desde JavaScript.

```javascript
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry
```
