#Gulpfile

Gulp.js es un build system(sistema de construcción) que permite automatizar tareas comunes de desarrollo, tales como la minificación de código JavaScript, recarga del navegador, compresión de imágenes, validación de sintaxis de código y un sin fin de tareas más.

####Descargar Gulp

La instalación de gulp no puede ser más sencilla si ya estás familiarizado con la instalación de módulos de npm.

Entonces, debemos instalar el comando gulp de manera que lo podamos acceder desde cualquier lugar de nuestro equipo:

```she
npm install -g gulp
```
#####El archivo gulpfile.js

El aplicativo o centro de la automatización de [Gulp] es el archivo gulpfile.js y es en este donde especificaremos las tareas o tasks que queremos ejecutar automáticamente cada vez que guardamos un archivo y creemos una nueva imagen o se cumpla cierto período.

La mayor parte del trabajo de gulp lo hacen los plugins y módulos de npm que instalamos.

Un gulpfile.js basico:

```javascript
// Archivo gulpfile.json

var gulp = require('gulp');

gulp.task('default', function() {
    console.log('Hola Mundo!!!');
});
```

