# Prueba Técnica - FrontEnd - Multiplica 
Ing. Pedro A. Alarcon Atencio <br>
pedroangel126@gmail.com

# Información General
Esta es una pequeña aplicación web diseñada para darles fácil acceso al listado aprobado de colores a utilizar dentro de una organización.

# Instalación
Clonar el repositorio: 
```sh
$ git clone https://github.com/pedroangel/reto-colores.git
```
Ejecuta el comando para descargar todas las librarías necesarias.
```sh
$ npm install
```
## Detalle de dependencias especificas.
Utilicé un <a href="https://www.creative-tim.com/product/vue-material-dashboard" target="_blank">Template</a> de VueJS y Material Design que he usado para hacer pruebas y cursos por mi cuenta, y aprovechar los componentes y estilos que este ofrece. 
Este template ya posee sus dependencias internas que ofrecen componentes como la tarjeta usada para presentar los datos de los colores, las animaciones y efectos visuales, el manejo de grillas, el diseño responsive y el plugin de notificaciones. Por esto es recomendable utilizar el comando anterior.

Para las otras dependencias fuera del template, se necesitaron:

## axios v0.19.2.
Para el manejo de las peticiones a la API de colores suministrada.
```sh
$ npm i axios
```

## v-clipboard v2.2.3.
Para la función de copiado del código hexadecimal al darle click a la ficha del color.
```sh
$ npm i v-clipboard
```

Una vez instaladas las dependencias, es necesario ejecutar el comando:
```sh
$ npm run serve
```
Para ejecutar el servidor en modo desarrolladores.

O si prefieren, ejecutar el comando:
```sh
$ npm run build
```
Para crear una build de producción y al terminar el proceso ejecutar:
```sh
$ npm start
```
Para ver la versión productiva compilada.

# Build de Producción Hosteado.
La rama master de este repositorio posee un pipeline configurado en el servicio de Heroku.

<a href="https://reto-colores.herokuapp.com/colores" target="_blank">APP Colores</a>

Esta es la información básica del proceso y las herramientas usadas en el desarrollo del servicio requerido para la Prueba Técnica.

Agradezco la oportunidad y el reto que represento este requerimiento.

De ser necesario, por favor indicarme algún otro tipo de información que deba ser aclarada de mi parte. 