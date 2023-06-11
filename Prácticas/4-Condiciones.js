/* 
Operadores lógicos de las condiciones y booleanos:
Bool -> true / false

Or ||
And &&
Igual ==
Igual ===
No igual !=
No !

Mayor que >
Menor que <
*/

// Condición verdadera:
if(true){
    console.log('La condición es verdadera');
}

// Condición false: Esto dará error ya que no puede haber condición falsa.
if(false){
    console.log('La condición es falsa');
}

// Condición verdadera con el operador (!):
if(!false){
    console.log('Ahora la operación es verdadera');
}

// Ejercicio de condicionales
var numero_uno = 23
var numero_dos = 19

if(numero_uno > numero_dos){
    console.log("Operación realizada")
}

/* 
Condicionales "else if" y "else":
1. if (solo se puede asignar un "if")
2. else if (solo se puede asignar un "else if")
3. else (se pueden asignar todos los "else" deseados)
*/

if(numero_uno === numero_dos){
    console.log("Devuelve falso");
}else if(false){

}
else{
    console.log("Hola");
}