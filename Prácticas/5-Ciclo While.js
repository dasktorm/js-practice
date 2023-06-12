/*
Palabras reservadas de los ciclos:
1. break
2. next
3. continue
*/

// Ciclo While:
while(condición){
    console.log(condición);
}

// Contador con While:
var contador = 0;
while(contador < 11){
    contador = contador + 1;
    console.log(contador)
}

// Contador con While y ++:
var contador = 0;
while(contador < 10){
    contador++;
    console.log(contador)
}

// Contador con verificador de pares:
var contador = 0;
while(contador < 10)
    contador++;
    if(contador % 2 == 0){
        console.log(contador);
    }

// Contador, verificador de pares con "next":
var contador = 0;
while(contador < 10){
    contador++;
    if(contador % 2 == 0){
        continue;
    }
    
    console.log(contador);
    }

// Contador con "break":
var contador = 0
while(true){
    contador++;

    console.log(contador);
    if(contador >= 10){
        break;
    }
}

// Ciclo "do while":
do{
    contador++;

    console.log(contador);
    if(contador >= 10){
        break;
    }
}while(false);