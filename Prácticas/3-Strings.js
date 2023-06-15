// Ejemplo de String:
var string = "Hola, Mundo!";
console.log(string);

// Concatenación:
var nombre = "Dámaso";
var string = "Hola, " + nombre;
console.log(string);

// Obtener la longitud de una string con ".length": Esto nos imprimirá la cantidad de carácteres:
console.log(string.length);

// Buscar valores específicos con ".indexOf":
var resultado = cadena.indexOf("Dámaso");
console.log(resultado);

// Ejercicio indexOf:
if(nombre.indexOf("Dámaso") != -1){
    console.log("Bienvenido, Dámaso.")
}else{
    console.log("No eres Dámaso.")
}

/* 
Identificación de carácteres con []:
Carácter: D á m a s o
Index:    0 1 2 3 4 5 
Index(-): 5 4 3 2 1 0 -
*/

console.log(nombre[2]); // Esto imprimirá "m"
console.log(nombre[5]); // Esto imprimirá "o"
console.log(nombre[nombre.length -1]); // Esto imprimirá "s"

// Identificación con "charAt":
console.log(nombre.charAt(1)); // Esto imprimirá "á"

// Reemplazo de carácteres con "replace":
nombre = nombre.replace("D", "A");
console.log(nombre); // Esto imprimirá "Aámaso"

// Obtención de pedazos con "slice":
console.log(nombre.slice(2,3)) // Esto imprimirá "m"

// Como pasar todo a mayúsculas y minúsculas:
console.log(nombre.toUpperCase()); // Para mayúsculas
console.log(nombre.toLowerCase()); // Para minúsculas