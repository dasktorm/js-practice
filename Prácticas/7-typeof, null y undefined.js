// typeof
var number = 0;
console.log(typeof number); // Imprimirá 0.

// typeof con Strings:
var string = "hola, mundo";
console.log(typeof string);

// typeof con arreglos:
var number = [];
console.log(typeof number); // Imprime un objeto.

// typeof con JSON:
var number = {};
console.log(typeof number); // También imprime un objeto.

// Definición de variables declaradas (sin declaración):
if(typeof hola == "undefined"){
    console.log("Esta variable no está declarada"); // Ejecuta lo que está dentro del "console.log()".
}


// Definición de variables declaradas (con declaración):
var hola = null;
if(typeof hola == "undefined"){
    console.log("Esta variable no está declarada");
}

// Keyword "null":
var hola = null; // Este keyword reservado indica que la variable no tiene un valor. Se usa para verficar que en efecto exista un valor asignado a esa var.

// Keyword "undefined":
/* No se le puede asignar ningún valor, ya que es un no definido, no existe una declaración. Se usa para verificar que una var esté definida */
hola = hola + otra_cosa; // "otra_cosa is undefined"

// null + undefined:
if(null == undefined){
    console.log("Esta variable no está declarada");} // Al usar "==" estas dos var retornan verdadero.




