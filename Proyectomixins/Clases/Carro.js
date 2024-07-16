import pasajerosMixin from "../mixins/Pasajeros.mixing.js"

export default class Carro {
    constructor(numPasajeros) {
        this.numPasajeros = numPasajeros
        Object.assign(this, pasajerosMixin)
    }
}