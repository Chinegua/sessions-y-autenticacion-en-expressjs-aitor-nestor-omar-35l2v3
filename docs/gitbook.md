#Gitbook

GitBook es una excelente herramienta para crear documentación de proyectos y libros técnicos usando Markdown y Git/Github. Permite incluir ejemplos y ejercicios interactivos (de momento, soporta solamente JavaScript) para posteriormente publicarlos de forma online via Github o cualquier otro hosting web.

Utilizando Markdown podemos maquetar los documentos y crearlos en distintos formatos como PDF, ebook o web. Uno de los objetivos de GitBook es poder crear documentación que sea fácilmente editable y abierta a contribuciones, por eso usando Git/Github podemos publicar nuestro libro técnico y manejar las colaboraciones de forma transparente.

##Instalación 

Para instalar gitbook lo haremos mediante un paquete npm ejecutando la siguiente linea de comando

```she
npm install gitbook-cli -g
```

Una vez instalado creamos el fichero book.json que contiene donde se encuentran los markdown para que el comando gitbook build sepa donde acceser, en caso de tener añgún plug-in en en nuestro gitbook deberiamos declararlo aqui tambien.

Ejecutamos el siguiente comando:

```she
gitbook build
``` 

con este comando se crea la carpeta _book que es donde se encuentran todos los ficheros html y estilos que se van a alojar en gitbook
