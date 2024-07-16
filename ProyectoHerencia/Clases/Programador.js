export default class Programador{
    constructor(lenguaje) {
        this.lenguaje = lenguaje
    }
    informacionProgramador() {
        console.log("Lenguaje programador: " + this.lenguaje);
    }
}