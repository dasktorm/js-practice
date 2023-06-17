// Ejemplo:
var arreglos = [1, 2, 3, 4];

var curso = {
    titulo: "Hola, JavaScript",
    temas: 18,
    repositorio: "Disponible en GitHub",
    introduccion: function(){
        console.log("Bienvenidos a: " + this.titulo+ " que tiene"+ this.temas+" temas");
    }
};

console.log(curso.introduccion());