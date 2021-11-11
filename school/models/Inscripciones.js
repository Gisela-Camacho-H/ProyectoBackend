// Solicitud.js
/** Clase que representa una solicitud de adopción */
class Inscripcion {
    constructor(id, idAlumno, fechaDeInscripcion, idCurso, materia) {
        this.id = id;
        this.idAlumno = idAlumno;
        this.fechaDeIncripcion = fechaDeInscripcion;
        this.idCurso = idCurso;
        this.materia = materia;
    }

}

module.exports = Inscripcion;