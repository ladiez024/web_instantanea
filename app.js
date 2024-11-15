const express = require('express'); //importa el modulo de express
const path = require('path');//importa el modulo path
const app = express();//crea una instancia de una aplicación de express
const port = 3000;//define el puerto
const rutas = require('./router');//importa el archivo router.js

// Configuración de vistas
app.set('view engine', 'ejs');//configura EJS como el motor de plantillas de vistas
app.set('views', path.join(__dirname, 'views'));//configura la ubicación de la carpeta llamada views 

// Middleware
app.use(express.urlencoded({ extended: true }));//habilita el procesamiento de datos de formularios
app.use(express.json());//habilita el procesamiento de datos en formato JSON
app.use(express.static(path.join(__dirname, 'public')));//sirve archivos estáticos
app.use(rutas); // Delegamos en el router el enrutamiento de paginas

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor en marcha en http://localhost:${port}`);//inicia el servidor en el puerto especificado (3000) 
});