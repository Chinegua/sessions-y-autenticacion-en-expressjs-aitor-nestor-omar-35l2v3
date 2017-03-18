
# Pandoc

Es un conversor libre y de código abierto, mayormente usado como una herramienta de escritura.
Se usa para producir documentos en una variedad de formatos desde archivos markdown.
Pandoc puede convertir documentos markdown, textile, HTML, LaTeX, OPML y un amplio abanico en HTML, docx, pdf, open office odt, etc.

## Instalación

A través de homebrew

```she
brew install pandoc
```

O descargando el paquete directamente de la web oficial


## node-pandoc

Es un paquete que actúa simplemente como puente entre la interfaz de línea de comandos de Pandoc y nodeJS

Para instalarlo

```she
npm install node-pandoc
```

## Ejemplos conversiones

HTML

```she
pandoc MANUAL.txt -o example1.html
```

LaTeX

```she
pandoc -s MANUAL.txt -o example4.tex
```


LaTeX a markdown

```she
pandoc -s example4.tex -o example5.text
```

