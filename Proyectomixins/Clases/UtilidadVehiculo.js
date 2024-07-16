import Carro from "./Carro.js";
import Tractomula from "./TractoMula.js";

export default class UtilidadVahiculo {
    constructor() {
        this.Carro1 = new Carro(5)
        this.Tractomula1 = new Tractomula(50)
    }
    usarCarro(){
        this.Carro1.transportarPasajeros()
    }
    usarTractomula(){
        this.Tractomula1.cargarMercancia()
        this.Tractomula1.descargarMercancia()
    }
}