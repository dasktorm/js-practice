// Ejemplo from "html":
    (function(){

        document.getElementById('btn').addEventListener("click",function(){
            console.log("Se hizo click");
        });

        setTimeout(function(){
            console.log("hola, mundo");
        },1000);

    })();