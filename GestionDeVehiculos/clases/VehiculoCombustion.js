export default class VehiculoCombustion{
    constructor(nivelCombustible){
        this.nivelCombustible=nivelCombustible
    }
    llenarTanque(){
        while(this.nivelCombustible < 100){
            console.log("Se esta llenando el combustible" + this.nivelCombustible );
            this.nivelCombustible++
        }
        console.log("El Vehiculo esta completamente tanqueado");
    }
    usarCombustible(){
        while(this.nivelCombustible > 0){
            console.log("Se esta utilizando el combustible" + this.nivelCombustible);

            this.nivelCombustible--
        }
        console.log("El combustible se agoto");
    }
    getNivelCombustible() {
        return this.nivelCombustible;
    }
}