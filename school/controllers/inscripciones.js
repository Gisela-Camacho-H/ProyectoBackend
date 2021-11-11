

const Inscripcion = require('../models/Inscripciones')

function crearInscripcion(req, res) {
    var inscripcion = new Curso(req.body)
    res.status(201).send(inscripcion)
}

function obtenerInscripciones(req, res) {
    var inscripcion1 = new Inscripcion(1, 'Finanzas')
    var inscripcion2 = new Inscripcion(2, 'Matematicas')
    res.send([inscripcion1, inscripcion2])
}

function modificarInscripcion(req, res) {
    var inscripcion1 = new Inscripcion(req.params.id, 'Español')
    var modificaciones = req.body
    inscripcion1 = { ...inscripcion1, ...modificaciones }
    res.send(inscripcion1)
}

function eliminarInscripcion(req, res) {
    res.status(200).send(`Inscripcion ${req.params.id} eliminado`);
}

module.exports = {
    crearInscripcion,
    obtenerInscripciones,
    modificarInscripcion,
    eliminarInscripcion
}
