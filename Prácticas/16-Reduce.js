// Ejemplo de "Reduce":
var letras = ["H", "o", "l", "a"];
var palabra = letras.reduce(function(valor_anterior_retornado, valor_actual, index, arreglo){
    return valor_anterior_retornado + valor_actual;
});

console.log(palabra);

// 
var numeros = [20, 1, 23, 1, 5];
var suma = numeros.reduce(function(valor_anterior_retornado, valor_actual, index, arreglo){
    return valor_anterior_retornado + valor_actual;
});

console.log(suma);

//
var suma = 0;
for(var i = 0;i<numeros.length;i++){
    suma += numeros[i];
}
console.log(suma);