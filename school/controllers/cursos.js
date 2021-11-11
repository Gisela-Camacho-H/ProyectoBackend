

const Curso = require('../models/Cursos')

function crearCurso(req, res) {
    var curso = new Curso(req.body)
    res.status(201).send(curso)
}

function obtenerCursos(req, res) {
    var curso1 = new Curso(1, 'Finanzas')
    var curso2 = new Curso(2, 'Matematicas')
    res.send([curso1, curso2])
}

function modificarCurso(req, res) {
    var curso1 = new Curso(req.params.id, 'Español')
    var modificaciones = req.body
    curso1 = { ...usuario1, ...modificaciones }
    res.send(curso1)
}

function eliminarCurso(req, res) {
    res.status(200).send(`Curso ${req.params.id} eliminado`);
}

module.exports = {
    crearCurso,
    obtenerCursos,
    modificarCurso,
    eliminarCurso
}
