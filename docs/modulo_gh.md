#GH-PAGES

Gh pages es una rama que puedes crear en el repositorio de tu proyecto creando una pagina estatica para este mismo.

Partiendo de un repositorio ya creado lo primero es crear la rama gh-pages

```she
$ cd /path/to/repo
$ git checkout -b gh-pages
```
Coloca el código de tu página asegurandote de que tienes el index.html, luego añade, confirma y pushea al repositorio.

```she
$ git add .
$ git commit -a -m "Añadiendo página del proyecto"
$ git push origin gh-pages
```
En caso de que queramos publicar el gitbook en nuestra pagina personal de github deberemos subir los ficheros .html que se encuentran en la carpeta _book una vez se ha ejecutado el comando ```gitbook build``` 