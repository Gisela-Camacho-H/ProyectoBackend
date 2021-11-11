var router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('welcome to adoptapet api');
})

router.use('/alumnos', require('./alumnos'));
router.use('/cursos', require('./cursos'));
router.use('/inscripciones', require('./inscripciones'));

module.exports = router;
