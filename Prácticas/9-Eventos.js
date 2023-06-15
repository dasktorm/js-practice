/*
Sintax html de .onClick:
<button onclick="click()">Click aquí para abrir un alert</button>
*/

function click(){
    alert("Hola, soy un alert");
}

/*
Sintax html de .onMouseOver:
<button onmouseover="mouseover()">Pon el cursor sobre mi para abrir un alert</button>
*/

function mouseover(){
    alert("Hola, sigo siendo un alert");
}

/*
Sintax html de .onMouseOut:
<button onmouseout="mouseout()">Saca el cursor de mi para abrir un alert</button>
*/

function mouseout(){
    alert("Hola, que sigo siendo un alert");
}

// .addEventListener:
document.getElementById("my_btn").addEventListener("click", click, false);
function click(){
    alert("Hola, soy un alert!")
}

/*
Sintax con .addEventListener:
    <div id="my_div">
        <button id="my_btn">Aquí va un alert</button>
    </div>
*/

document.getElementById("my_div").addEventListener("click", another_click, true);
document.getElementById("my_btn").addEventListener("click", click, false);

function click(){
    alert("Hola, soy un alert del btn");
}

function another_click(){
    alert("Hola, sigo siendo un alert del div");
}

// Bubbling y Capture: "Bubbling" desde adentro hacia afuera y "Capture" desde afuera hacia adentro.