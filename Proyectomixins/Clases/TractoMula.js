import CargableMixin from "../mixins/Cargablemixin.js"

export default class Tractomula{
    constructor(capacidadCarga){
        this.capacidadCarga=capacidadCarga
        Object.assign(this, CargableMixin)
    }
}