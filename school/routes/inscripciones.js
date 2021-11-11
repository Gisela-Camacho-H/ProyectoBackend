const router = require('express').Router();
const {
    crearInscripcion,
    obtenerInscripciones,
    modificarInscripcion,
    eliminarInscripcion
} = require('../controllers/inscripciones')

router.get('/', obtenerInscripciones)
router.post('/', crearInscripcion)
router.put('/:id', modificarInscripcion)
router.delete('/:id', eliminarInscripcion)

module.exports = router;