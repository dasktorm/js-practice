Operadores:

1. Operador OR (|):

El operador OR a nivel de bits (|) devuelve un número o BigInt cuya representación binaria tiene un 1 en cada posición de bit en la que los bits correspondientes de uno o ambos operandos sean 1.

    1.1 Descripción:
    El operador | está sobrecargado para dos tipos de operandos: número y BigInt. Para los números, el operador devuelve un entero de 32 bits. Para BigInts, el operador devuelve un BigInt. Primero, convierte ambos operandos a valores numéricos y comprueba sus tipos. Realiza una operación OR a nivel de bits con BigInt si ambos operandos se convierten en BigInts; de lo contrario, convierte ambos operandos a enteros de 32 bits y realiza un OR a nivel de bits con números. Se lanza un TypeError si uno de los operandos se convierte en un BigInt pero el otro se convierte en un número.

    El operador opera en las representaciones de bits de los operandos en complemento a dos. Cada bit en el primer operando se empareja con el bit correspondiente en el segundo operando: el primer bit con el primer bit, el segundo bit con el segundo bit, y así sucesivamente. El operador se aplica a cada par de bits y el resultado se construye a nivel de bits.

2. Operador AND (&):
El operador AND a nivel de bits (&) devuelve un número o BigInt cuya representación binaria tiene un 1 en cada posición de bit en la que los bits correspondientes de ambos operandos sean 1.

    2.1 Descripción:
    El operador & está sobrecargado para dos tipos de operandos: número y BigInt. Para los números, el operador devuelve un entero de 32 bits. Para BigInts, el operador devuelve un BigInt. Primero, convierte ambos operandos a valores numéricos y comprueba sus tipos. Realiza una operación AND a nivel de bits con BigInt si ambos operandos se convierten en BigInts; de lo contrario, convierte ambos operandos a enteros de 32 bits y realiza un AND a nivel de bits con números. Se lanza un TypeError si uno de los operandos se convierte en un BigInt pero el otro se convierte en un número.

    El operador opera en las representaciones de bits de los operandos en complemento a dos. Cada bit en el primer operando se empareja con el bit correspondiente en el segundo operando: el primer bit con el primer bit, el segundo bit con el segundo bit, y así sucesivamente. El operador se aplica a cada par de bits y el resultado se construye a nivel de bits.

3. Igualdad (==):
El operador de igualdad (==) verifica si sus dos operandos son iguales y devuelve un resultado booleano. A diferencia del operador de igualdad estricta, intenta convertir y comparar operandos que son de diferentes tipos.

    3.1 Descripción
    Los operadores de igualdad (== y !=) proporcionan la semántica de "Igualdad flexible" ("IsLooselyEqual"). Esto se puede resumir aproximadamente de la siguiente manera:

    Si los operandos tienen el mismo tipo, se comparan de la siguiente manera:
    
        Objeto: devuelve verdadero solo si ambos operandos hacen referencia al mismo objeto.

        Cadena de texto: devuelve verdadero solo si ambos operandos tienen los mismos caracteres en el mismo orden.

        Número: devuelve verdadero solo si ambos operandos tienen el mismo valor. +0 y -0 se tratan como el mismo valor. Si alguno de los operandos es NaN, devuelve falso; por lo tanto, NaN nunca es igual a NaN.

        Booleano: devuelve verdadero solo si los operandos son ambos verdaderos o ambos falsos.
    
        BigInt: devuelve verdadero solo si ambos operandos tienen el mismo valor.
    
        Símbolo: devuelve verdadero solo si ambos operandos hacen referencia al mismo símbolo.

    Si uno de los operandos es null o undefined, el otro también debe ser null o undefined para que devuelva verdadero. De lo contrario, devuelve falso.

    Si uno de los operandos es un objeto y el otro es un primitivo, convierte el objeto a un primitivo.

    En este paso, ambos operandos se convierten a primitivos (uno de los tipos: String, Number, Boolean, Symbol y BigInt). El resto de la conversión se realiza caso por caso.

    Si son del mismo tipo, se comparan usando el paso 1.
    
    Si uno de los operandos es un Símbolo pero el otro no lo es, devuelve falso.
    
    Si uno de los operandos es un Booleano pero el otro no lo es, convierte el booleano a un número: true se convierte en 1 y false se convierte en 0. Luego, compara nuevamente los dos operandos de forma flexible.

        De Número a Cadena de texto: convierte la cadena de texto a un número. Si la conversión falla, se obtiene NaN, lo que garantiza que la igualdad sea falsa.

        De Número a BigInt: se compara por su valor numérico. Si el número es ±Infinity o NaN, devuelve falso.

        De Cadena de texto a BigInt: convierte la cadena de texto a un BigInt utilizando el mismo algoritmo que el constructor BigInt(). Si la conversión falla, devuelve falso.

    La igualdad flexible es simétrica: A == B siempre tiene la misma semántica que B == A para cualquier valor de A y B (excepto por el orden de las conversiones aplicadas).

    La diferencia más notable entre este operador y el operador de igualdad estricta (===) es que el operador de igualdad estricta no intenta la conversión de tipos. En cambio, el operador de igualdad estricta siempre considera que los operandos de diferentes tipos son diferentes. El operador de igualdad estricta básicamente realiza solo el paso 1 y luego devuelve falso para todos los demás casos.

    Hay una "violación intencional" del algoritmo anterior: si uno de los operandos es document.all, se trata como si fuera undefined. Esto significa que document.all == null es verdadero, pero document.all === undefined && document.all === null es falso.

4. Igualdad estricta (===):
El operador de igualdad estricta (===) verifica si sus dos operandos son iguales y devuelve un resultado booleano. A diferencia del operador de igualdad, el operador de igualdad estricta siempre considera que los operandos de diferentes tipos son diferentes.
    
    4.1 Descripción:
    Los operadores de igualdad estricta (=== y !==) proporcionan la semántica de IsStrictlyEqual.

        Si los operandos son de diferentes tipos, devuelve falso.

        Si ambos operandos son objetos, devuelve verdadero solo si hacen referencia al mismo objeto.

        Si ambos operandos son null o ambos operandos son undefined, devuelve verdadero.

        Si alguno de los operandos es NaN, devuelve falso.

    De lo contrario, compara los valores de los dos operandos:
    
    Los números deben tener los mismos valores numéricos. +0 y -0 se consideran el mismo valor.

    Las cadenas de texto deben tener los mismos caracteres en el mismo orden.

    Los booleanos deben ser ambos verdaderos o ambos falsos.

La diferencia más notable entre este operador y el operador de igualdad (==) es que si los operandos son de diferentes tipos, el operador == intenta convertirlos al mismo tipo antes de compararlos.

5. Desigualdad (!=)
El operador de desigualdad (!=) verifica si sus dos operandos no son iguales y devuelve un resultado booleano. A diferencia del operador de desigualdad estricta, intenta convertir y comparar operandos que son de diferentes tipos.

    5.1 Descripción:
    El operador de desigualdad verifica si sus operandos no son iguales. Es la negación del operador de igualdad, por lo que las siguientes dos líneas siempre darán el mismo resultado:

    x != y;
    !(x == y);

    Para obtener detalles sobre el algoritmo de comparación, consulta la página del operador de igualdad.

    Al igual que el operador de igualdad, el operador de desigualdad intentará convertir y comparar operandos de diferentes tipos:

    3 != "3"; // false

    Para evitar esto y requerir que los diferentes tipos se consideren diferentes, utiliza el operador de desigualdad estricta en su lugar:

    3 !== "3"; // true

6. Negación lógica (!)
El operador de negación lógica (!) (complemento lógico, negación) convierte la verdad en falsedad y viceversa. Normalmente se utiliza con valores booleanos (lógicos). Cuando se utiliza con valores no booleanos, devuelve falso si su único operando se puede convertir a verdadero; de lo contrario, devuelve verdadero.

    6.1 Descripción
    Devuelve falso si su único operando se puede convertir a verdadero; de lo contrario, devuelve verdadero.

    Si un valor se puede convertir a verdadero, se le llama "truthy". Si un valor se puede convertir a falso, se le llama "falsy".

    Ejemplos de expresiones que se pueden convertir a falso son:

    null;
    NaN;
    0;
    cadena vacía ("" o '' o ``);
    undefined.

Aunque el operador ! se puede usar con operandos que no son valores booleanos, aún se puede considerar un operador booleano, ya que su valor de retorno siempre se puede convertir a un valor booleano primitivo. Para convertir explícitamente su valor de retorno (o cualquier expresión en general) al valor booleano correspondiente, se puede utilizar el operador de doble negación (!!) o el constructor Boolean.