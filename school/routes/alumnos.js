// Estructura del CRUD
const router = require('express').Router();
    const {
    crearAlumno,
    obtenerAlumnos,
    modificarAlumno,
    eliminarAlumno
} = require('../controllers/alumnos')

router.get('/', obtenerAlumnos)
router.post('/', crearAlumno)
router.put('/:id', modificarAlumno)
router.delete('/:id', eliminarAlumno)

module.exports = router;
