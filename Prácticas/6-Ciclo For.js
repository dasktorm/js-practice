// Sintax de For:
for(iniciación;condición;incremento){
    bloque_codigo;
}

for(;;){
    break;
}

// Ciclo:
for(var i = 0; i < 10; i++){
    console.log(i);
}

// Iteración de arreglos:
var arreglo = ["hola", "mundo"];
for (var i = 0; i < arreglo.length; i++){
    if (i>=1) { break; }
    console.log(i);
}

// Iteración de arreglos con "next":
for(var i = 0; i<10; i++){
    if(i%2 !== 0){ next; }
    console.log(i);
}

// Iteración de arreglos con "continue":
for(var i = 0; i<10; i++){
    if(i%2 !== 0){ continue; }
    console.log(i);
}