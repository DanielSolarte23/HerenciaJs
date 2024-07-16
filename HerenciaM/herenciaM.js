class Profesor {
    constructor(experiencia,) {
        this.experiencia = experiencia
    }
    informacionProfesor() {
        console.log("Años experiencia profesor: " + this.experiencia);
    }
}

class Programador {
    constructor(lenguaje) {
        this.lenguaje = lenguaje
    }
    informacionProgramador() {
        console.log("Lenguaje programador: " + this.lenguaje);
    }
}

class Instructor {
    constructor() {
        this.Profesor1 = new Profesor(2);
        this.Programador1 = new Programador("Python");
    }
    usarProgramador() {
        this.Programador1.informacionProgramador();
    }
    usarProfesor() {
        this.Profesor1.informacionProfesor();
    }
}

let objInstructor = new Instructor();
objInstructor.usarProfesor();
objInstructor.usarProgramador();