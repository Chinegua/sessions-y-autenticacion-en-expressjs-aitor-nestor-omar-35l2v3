# Set cookie


El encabezado de respuesta HTTP Set-Cookie se utiliza para enviar cookies desde el servidor al agente de usuario (navegador).


## Sintáxis

```
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax

// Multiple directives are also possible, for example:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```


## Directivas

* [cookie-name]=[cookie-value]


Una cookie comienza con un par nombre-valor:


 * Un **cookie-name** puede ser cualquier cosa menos caracteres de control o espacios y tabuladores Tampoco debe contener un carácter separador como el siguiente: () <> @,; : \ "/ []? = {}.

 * Un **cookie-value** se puede establecer opcionalmente entre comillas dobles y cualquier caracteres US-ASCII excluyendo CTLS. Espacios en blanco, comillas dobles, coma, punto y coma y barra invertida son permitidos.

 * **__Secure- prefix**: Las cookies con un nombre que empiece por Secure- (el guión es parte del prefijo) deben establecerse con el indicador seguro y deben ser de una página segura (HTTPS).

 * **_Host- prefix**: Las cookies con un nombre que empiece por Host- deben establecerse con el indicador seguro, deben ser de una página segura (HTTPS), no deben tener un dominio especificado (y por lo tanto no se envían a subdominios) y la ruta debe Ser "/".



* **Expires=[date]** (Opcional)

Si no se especifica, la cookie tendrá la vida útil de una cookie de sesión. Una sesión finaliza cuando el cliente se cierra, lo que significa que las cookies de sesión se eliminarán en ese momento. Sin embargo, muchos navegadores web tienen una característica llamada sesión de restauración que guardará todas las pestañas y que vuelva la próxima vez que utilice el navegador


* **Max-Age=[non-zero-digit]** (Opcional)


Número de segundos hasta que expire la cookie. Uno o más dígitos de 1 a 9.

* **Domain=[domain-value]** (Opcional)



Especifica los hosts a los que se enviará la cookie. Si no se especifica, el valor predeterminado es la parte del host de la ubicación del documento actual (pero no incluye los subdominios).

* **Path=[path-value]** (Opcional)

Indica una ruta URL que debe existir en el recurso solicitado antes de enviar el encabezado Cookie. El carácter% x2F ("/") se interpreta como un separador de directorios y los subdirectorios también se emparejarán (por ejemplo, path = / docs, "/ docs", "/ docs / Web /" o "/ docs / Web / HTTP "serán todos igualados).

* **Secure** (Opcional)

La cookie segura sólo se enviará al servidor cuando se realice una solicitud utilizando SSL y el protocolo HTTPS. Sin embargo, la información confidencial o sensible nunca debe ser almacenada o transmitida en cookies HTTP, ya que el mecanismo completo es intrínsecamente inseguro y esto no significa que cualquier información esté cifrada, por ejemplo.

* **HttpOnly** (Opcional)


Las cookies HttpOnly no son accesibles a través de JavaScript a través de la propiedad Document.cookie, ni las API XMLHttpRequest y Request, para evitar ataques contra secuencias de comandos entre sitios (XSS).



**Para ejemplos o más información visite la gúia completa de [http cookie](https://github.com/ULL-ESIT-DSI-1617/estudiar-cookies-y-sessions-en-expressjs-aitor-nestor-omar-35l2v2/blob/master/docs/http.md)**
