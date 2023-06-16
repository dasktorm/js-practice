// Ejemplo de "forEach":
var numeros = [2, 4, 5, 8];
numeros.forEach(function(elemento,index,arreglo){
    console.log(elemento);
    console.log(index);
    console.log(arreglo);
});

// "forEach" como sustituto de "Map":
numeros.forEach(function(elemento,index,arreglo){
    arreglo[index] = Math.pow(elemento,2);
});

console.log(numeros);