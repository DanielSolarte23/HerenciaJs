import Profesor from "./Profesor.js";
import Programador from "./Programador.js";

export default class Instructor {
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