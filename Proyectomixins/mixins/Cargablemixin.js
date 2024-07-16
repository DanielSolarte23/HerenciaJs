const CargableMixin = {
    cargarMercancia(){
        console.log(this.capacidadCarga);
    },
    descargarMercancia(){
        console.log("Se esta descargando la mercancia");
    }
}

export default CargableMixin;