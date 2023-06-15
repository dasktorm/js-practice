// Max
var max = 100;

// Min
var min = 1;

// Random
var numero_secreto = Match.random() *
(max-min) + min;

numero_secreto = parseInt(numero_secreto);

console.log(numero_secreto);

var mensaje = "Ingresa un número para adivinar";

while(true){
    var numero_del_usuario = prompt(mensaje, "0");
    numero_del_usuario = parseInt(numero_del_usuario);

    if (numero_del_usuario === numero_secreto){
        alert("Ganaste");
        break;
    }

    else if(numero_del_usuario === 0){
        break;
    }


    else if(numero_del_usuario > numero_secreto){
        mensaje = "Lo sentimos, el número es mayor que el número mágico";
    }
    
    else if (numero_del_usuario < numero_secreto){
        mensaje = "Lo sentimos el número es menor que el número mágico";
    }
}