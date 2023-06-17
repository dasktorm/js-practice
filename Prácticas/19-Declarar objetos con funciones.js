function Tutor (nombre) {
    this.nombre = nombre;
    this.saludar = function(){
        console.log("Hola a todos soy "+this.nombre);
    }
    if(typeof apellido !== "undefined"){
        this.nombre_completo = nombre + " " + apellido;
    }
}

var damaso = new Tutor("Dámaso", "Armas");
damaso.saludar();

console.log(damaso.nombre_completo);