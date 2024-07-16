export default class VehiculoElectrico {
    constructor(nivelBateria) {
        this.nivelBateria = nivelBateria;
    }

    cargarBateria() {
        while (this.nivelBateria < 100) {
            console.log("Nivel de la batería está cargando: " + this.nivelBateria);
            this.nivelBateria++;
        }
        console.log("La batería está completamente cargada.");
    }

    usarBateria() {
        while (this.nivelBateria > 0) {
            console.log("Nivel de la batería se está descargando: " + this.nivelBateria);
            this.nivelBateria--;
        }
        console.log("La batería está completamente descargada.");
    }
    getNivelBateria() {
        return this.nivelBateria;
    }
}
