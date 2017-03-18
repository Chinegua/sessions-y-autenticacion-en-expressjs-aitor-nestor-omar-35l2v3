# Query String

**Query string** es un término informático que se utiliza para hacer referencia a una interacción con una
base de datos.
  * Es la parte de una URL que contiene los datos que deben pasar a aplicaciones web como los programas CGI.

En un comienzo, las URL de las páginas web tenían la estructura jerárquica de los directorios del sitio (llamados **sitios estáticos**), como por ejemplo:
```
www.sitiodeejemplo.net/paginaprincipal/paginasecundaria/contenido.html
```
Más tarde, aparecieron los **sitios dinámicos**, ya que el servidor crea automáticamente la página cuando el navegante la solicita. Para ello, se vale de una serie de parámetros o datos que se incluyen en la URL (normalmente compuestos por un *nombre* y un *valor* separados por el signo *igual*), como por ejemplo:
```
www.sitiodeejemplo.net/pagina.php?nombredevalor1=valor1&nombredevalor2=valor2
```
Otro ejemplo común de dirección dinámica consistiría en configurar el servidor para que asigne automáticamente a un conjunto de variables predefinidas los valores resultantes de la separación de la **query string** usando como símbolo de separación de la cadena el carácter ```/```.
```
www.sitiodeejemplo.net/paginaprincipal/paginasecundaria/contenido
```

De esta forma y mediante la configuración del servidor (ej. ```mod rewrite``` en servidores web Apache) se podría acceder a las tres subcadenas resultantes en nuestro ejemplo, esto es, *paginaprincipal*, *paginasecundaria* y *contenido* accediendo mediante GET a los sendos nombres de variable que se definieron en la configuración del servidor web. Se trata de una segunda opción simplificada de pares variable-valor, con la peculiraridad de que los nombres de variable se sobreentienden y predefinen en el servidor y el valor se obtiene tras aplicar una separación de la **query string** mediante el símbolo ```/```. De esta forma se puede trabajar con *Friendly URLs* siguiendo las recomendaciones de los principales motores de búsqueda, sin necesidad de crear una estructura de directorios en el servidor. Una gran cantidad de sitios web utilizan esta forma de interpretación de la **query string**.

## Instalación del paquete query-string
```
$ npm install --save query-string
```
Un [ejemplo de uso](https://github.com/ULL-ESIT-DSI-1617/estudiar-cookies-y-sessions-en-expressjs-aitor-nestor-omar-35l2v2/blob/master/src/query-string.js) del módulo **query-string**.
