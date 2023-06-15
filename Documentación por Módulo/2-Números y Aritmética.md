1. Adición: 
    El operador de adición (+) produce la suma de operandos numéricos o la concatenación de (cadenas) string.
    
    1.1 Adición:
        // Número + Número -> adición
        1 + 2 // 3

        // Booleano + Número -> adición
        true + 1 // 2

        // Booleano + Booleano -> adición
        false + false // 0

    1.2 Concatenación:
        // String + String -> concatenación
        'fut' + 'bol' // "futbol"

        // Número + String -> concatenación
        5 + 'oh' // "5oh"

        // String + Booleano -> concatenación
        'fut' + false // "futfalse"

2. Sustracción:
    El operador de sustracción (-) sustrae dos operandos, produciendo su diferencia.

    2.1 Con números:
        5 - 3     // 2
        3 - 5     // -2

    2.2 No númericos:
        'foo' - 3 // NaN

3. División:
    El operador de división (/) produce el cociente de sus operandos donde el operando izquierdo es el dividendo y el operando derecho es el divisor.

    3.1 División básica:
        1 / 2              // 0.5
        Math.floor(3 / 2) // 1
        1.0 / 2.0         // 0.5

    3.2 División por 0:
        2.0 / 0     // Retorna Infinity
        0.0 / 0.0   // Retorna Infinity, Dado que 0.0 === 0
        2.0 / -0.0  // Retorna -Infinity

4. Multiplicación:
    El operador de multiplicación (*) produce el producto de los operandos.

    4.1 Multiplicación con números:
        2 * 2; // 4
        -2 * 2; // -4

    4.2 Multiplicación con infinito:
        Infinity * 0; // NaN
        Infinity * Infinity; // Infinity

    4.3 Multiplicación con no-números:
        "foo" * 2; // NaN
        "2" * 2; // 4

    4.4 Multiplicación con BigInt:
        2n * 2n; // 4n
        -2n * 2n; // -4n

        2n * 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions.

        // Para multiplicar un BigInt con un no-BigInt, se convierte en un operando
    
        2n * BigInt(2); // 4n
        Número(2n) * 2; // 4

5. Resto:
    El operador resto (%) devuelve el resto de la división entre dos operandos. Siempre toma el signo del dividendo.

    5.1 Resto con dividendo positivo:
        12 % 5  //  2
        1 % -2 //  1
        1 % 2  //  1
        2 % 3  //  2
        5.5 % 2 // 1.5

    5.2 Resto con dividendo negativo:
        -12 % 5 // -2
        -1 % 2  // -1
        -4 % 2  // -0
    
    5.3 Resto con NaN:
        NaN % 2 // NaN

    5.4 Resto con Infinity:
        Infinity % 2 // NaN
        Infinity % 0 // NaN
        Infinity % Infinity // NaN














