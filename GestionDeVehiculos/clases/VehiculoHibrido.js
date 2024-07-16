import VehiculoCombustion from "./VehiculoCombustion.js";
import VehiculoElectrico from "./VehiculoElectrico.js";

export default class VehiculoHibrido {
    constructor(){
        this.VehiculoElectrico1 = new VehiculoElectrico(80)
        this.VehiculoCombustion1 = new VehiculoCombustion(50)
    }
    CargBateria(){
        this.VehiculoElectrico1.cargarBateria()
    }
    usaBateria(){
        this.VehiculoElectrico1.usarBateria()
    }
    llenarTanque(){
        this.VehiculoCombustion1.llenarTanque()
    }
    usarCombustible(){
        this.VehiculoCombustion1.usarCombustible()
    }
    mostrarEstado(){
        console.log("El nivel de la batería es " + this.VehiculoElectrico1.getNivelBateria());
        console.log("El nivel del combustible es " + this.VehiculoCombustion1.getNivelCombustible());
    }
}