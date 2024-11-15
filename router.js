const express = require('express');
const router = express.Router();
//const { consultarActivos, insertarProducto,borrarProducto } = require('./database/db'); // consultas CRUD de la base de datos
router.get('/', (req, res) => { //lo que esta '....' es la ruta para la que se define el get
    res.render('pages/index');//renderiza la vista index ubicada en la carpeta pages
});

router.post('/add', (req, res) => {//define una ruta para las solicitudes POST a la /add
    const { nombre, precio } = req.body;
    insertarProducto(nombre, precio, (err, id) => {//acepta un callback (err, id)
        if (err) {
            console.error(err); // Muestra el error en la consola
            return res.status(500).send('Error al insertar el producto'); // Respuesta de error
        }
        // Si no hay errores redirigimos al cliente a la vista principal que es index
        res.redirect('/');
    });
});
module.exports=router;