1. Cadenas (Strings)
    
Descripción:
El objeto String se utiliza para representar y manipular una secuencia de caracteres.

Las cadenas son útiles para almacenar datos que se pueden representar en forma de texto. Algunas de las operaciones más utilizadas en cadenas son verificar su length, para construirlas y concatenarlas usando operadores de cadena + y +=, verificando la existencia o ubicación de subcadenas con indexOf() o extraer subcadenas con el método substring().

1.1 Creación de Cadenas:
    Las cadenas se pueden crear como primitivas, a partir de cadena literales o como objetos, usando el constructor String()

    const string1 = "Una cadena primitiva";
    const string2 = 'También una cadena primitiva';
    const string3 = `Otra cadena primitiva más`;
    const string4 = new String("Un objeto String");

1.2 Longitud de cadenas:
    La propiedad ".length" especifica el número de argumentos esperados por la función.

    Y lleva la siguiente sintaxis:
    var saludo = "Hola";
    console.log(saludo.length); // Y el resultado será "4".

1.3 Valores específicos con indexOf:
    El método indexOf() devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.

    Sintaxis del método:
    cadena.indexOf(valorBusqueda[, indiceDesde]);

1.4 Acceder a un cáracter:
    Hay dos formas de acceder a un caracter individual en una cadena. La primera es con el método charAt():

    Sintaxis de charAt:
    str.charAt(indice)

    Ejemplo:
    var nombre = Nombre;
    console.log(nombre.charAt(1)); // Esto imprimirá "o"

1.5 Reemplazar un cáracter:
    El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo. El patrón puede ser una cadena o una RegExp, y el reemplazo puede ser una cadena o una función que será llamada para cada coincidencia. Si el patrón es una cadena, sólo la primera coincidencia será reemplazada.

    var nombre = Nombre;
    nombre = nombre.replace("M", "A");
    console.log(nombre); // Esto imprimirá "Noabre"

1.6 Obtención de pedazos:
    El método slice() extrae una sección de una cadena y devuelve una cadena nueva.

    Sintaxis del método:
    cadena.slice(inicioTrozo[, finTrozo])

    Ejemplo:
    var nombre = Nombre
    console.log(nombre.slice(2,3)) // Esto imprimirá "m"

1.7 Mayúsculas y Minúsculas:
    1.7.1 toUpperCase: 
        El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.

        Ejemplo:
        var string = "hola, soy un ejemplo";
        console.log(string.toUpperCase()); 
        
        // Resultado = "Hola, Soy Un Ejemplo".

    1.7.2 toLowerCase:
        El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.

        Ejemplo:
        var string = "Hola, Sigo Siendo Un Ejemplo";
        console.log(string.toLowerCase());

        // Resultado = "hola, sigo siendo un ejemplo".







