const router = require('express').Router();
const {
    crearCurso,
    obtenerCursos,
    modificarCurso,
    eliminarCurso
} = require('../controllers/cursos')

router.get('/', obtenerCursos)
router.post('/', crearCurso)
router.put('/:id', modificarCurso)
router.delete('/:id', eliminarCurso)

module.exports = router;