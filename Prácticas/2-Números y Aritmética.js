/* 
Operadores aritméticos
División = /
Multiplicación = *
Suma = +
Resta = -
Módulo = %
*/

// Operación de suma:
var edad = 21;
console.log(edad + 2);

// Adición en linea:
edad++; // Este "++" le añadirá un solo número como +1

// Suma de variables:
var float_points = 12.40;
console.log(edad + float_points);

var resultado_suma = edad + float_points;
console.log(resultado_suma);

// Mini-proyecto con el Operador % - Verificador de Pares e Impares:

console.log(es_par(3))

function es_par(numero){
    if(numero & 2 == 0){
        return true;
    }
    return false;
}






