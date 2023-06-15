// .getElementById:
var div = 
document.getElementById("div");

// .classList.add:
div.classList.add(my_class);

//.getElementsByClassName:
var div =
document.getElementsByClassName("div");

//.getElementByTagName:
var div =
document.getElementsByTagName("div");

//.querySelector para clases:
var div =
document.querySelector(".my_class");

//.querySelector para id:
var div =
document.querySelector("#my_class");

//.querySelectorAll:
var div =
document.querySelectorAll("div");

// Práctica del selector con JQuery:
function $(selector){
    return document.querySelector(selector);
}

var my_class = $(".my_class");

