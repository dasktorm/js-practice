//Acceder al elemento por la posición:
var arreglo = [20, "hola mundo", {array}];
console.log(arreglo[0]); // Esto imprimirá el elemento del primer bloque (20).

// Identificar el número del elemento:
var arreglo = [20, "hola mundo", {array}];
console.log(arreglo.length); // Esto imprimirá la cantidad de elementos en la variable "arreglo" (3).

// Añadir un elemento al final:
var arreglo = [20, "hola mundo", {array}];
arreglo.push(7);
console.log(arreglo); // Esto empujará al (7) hacia el final del bloque [20, "hola mundo", {array}, 7].

// Añadir un elemento al principio:
var arreglo = [20, "hola mundo", {array}];
arreglo.unshift(7);
console.log(arreglo); // Esto empujará al (7) hacia el principio del bloque [7, 20, "hola mundo", {array}].

// Remover el primer elemento:
var arreglo = [20, "hola mundo", {array}];
arreglo.shift();
console.log(arreglo); // Esto eliminará el primer elemento (20) ["hola mundo", {array}].

// Eliminar el último elemento:
var arreglo = [20, "hola mundo", {array}];
arreglo.pop();
console.log(arreglo); // Esto eliminará el último elemento (20) [20, "hola mundo"].

// Iteración de arreglos (a):
for(var i = 0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}

// Iteración de arreglos (b):
for(var i = arreglo.length; i>= 0; i--){
    console.log(arreglo[i]);
}

// Iteración de arreglos (c):
var arreglo = [20, "hola mundo", {array}, 30];
var i = arreglo.length;
for(;i >= 0; i--){
    console.log(arreglo[i]);
}