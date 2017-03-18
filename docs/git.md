
# Git
### Software de control de versiones

Git fue creado pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente.

Algunas de las características más importantes de Git son:

  * Rapidez en la gestión de ramas
  * Gestión distribuida
  * Gestión eficiente de proyectos grandes
  * Realmacenamiento periódico en paquetes

# Cómo instalar Git

Git se puede instalar de varias maneras, ya sea por código fuente o mediante la instalación de paquetes para la plataforma que use el usuario, pero se suele usar más por código fuente (Mac/Linux) por la facilidad de la instalación.

## Instalación para Linux

Dependiendo de la distribución que el usuario esté utilizando, se puede realizar de dos maneras. Si el usuario usa una distribución basada en Fedora, usaremos el comando **yum**

```she
yum install git-core
```

Si al contrario, usa una distribución basada en Debian (como Ubuntu), usaremos **apt-get**

```she
apt-get install git
```

## Instalación para Mac

La manera más sencilla es mediante el instalador gráfico de Git, pero si en este caso tenemos instalado **Homebrew**, lo haremos por este método.

```she
brew install git
```

## Instalación para Windows

Instalar Git en Windows es muy fácil. El proyecto msysGit tiene uno de los procesos de instalación más sencillos. Simplemente descarga el archivo exe del instalador desde la página de GitHub, y ejecútalo:

```she
http://msysgit.github.com/
```

# Órdenes básicas de Git

* Iniciar un repositorio vacío en una carpeta determinada

```she
git init
```
* Añadir un archivo específico
```she
git add "nombre_archivo"
```
* Añadir todos los archivos del directorio
```she
git add .
```
* Confirmar los cambios realizados (como mensaje)
```she
git commit -am "mensaje"
```
* Mostrar el estado actual de la rama de trabajo
```she
git status
```


