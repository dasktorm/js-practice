// Ejemplo:
var arreglo = [2, 5, 1, 10, 20];
arreglo.sort();
console.log(arreglo); // ".sort" es muy bueno para organizar letras.

// Ordenar de menor a mayor (a):
function ordenar(a,b){
    if(a > b){ return 1; }
    else if(b < a){ return -1; }
    else if(a == b){ return 0; }
}

var arreglo = [2, 5, 1, 10, 20];
arreglo.sort(ordenar);
console.log(arreglo);

// Ordenar de menor a mayor (b);
function ordenar(a,b){
    return a -b;
}

var arreglo = [2, 5, 1, 10, 20];
arreglo.sort(ordenar);
console.log(arreglo);

// Ordenar de mayor a menor con "reverse":
function ordenar(a,b){
    return a -b;
}

var arreglo = [2, 5, 1, 10, 20];
arreglo.sort(ordenar);
arreglo.reverse();
console.log(arreglo);

// Convertir cadenas en arreglos:
var arreglo = "a, b, c, 2".split(",");
console.log(arreglo);

// Uso del "join":
var arreglo = "a, b, c, 2".split(",");
arreglo = arreglo.join("p");
console.log(arreglo);