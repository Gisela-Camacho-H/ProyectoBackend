
const Alumno = require('../models/Alumnos')

function crearAlumno(req, res) {

  var Alumno = new Alumno(req.body)
  res.status(201).send(Alumno)
}

function obtenerAlumnos(req, res) {
  var alumno1 = new Alumno(1, 'Juan', 'Vega', 'juan@vega.com')
  var alumno2 = new Alumno(2, 'Monserrat', 'Vega', 'mon@vega.com')
  res.send([alumno1, alumno2])
}

function modificarAlumno(req, res) {
  var alumno1 = new Alumno(req.params.id, 'Juan', 'Vega', 'juan@vega.com')
  var modificaciones = req.body
  alumno1 = { ...alumno1, ...modificaciones }
  res.send(alumno1)
}

function eliminarAlumno(req, res) {
  res.status(200).send(`Alumno ${req.params.id} eliminado`);
}

module.exports = {
  crearAlumno,
  obtenerAlumnos,
  modificarAlumno,
  eliminarAlumno
}
