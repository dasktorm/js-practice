var:
La sentencia "var" declara una variable, opcionalmente inicializándola con un valor.

Sintaxis:
var nombreDeVariable1 [= valor1] [, nombreDeVariable2 [= valor2] ... [, nombreDeVariableN [=valorN]]];

1. Variables

  1.1 "nombreDeVariableN":
  Representa el nombre que el programador da a la variable. Puede ser cualquier identificador legal.

  1.2 "valorN":
  Valor inicial de la variable. Puede ser cualquier expresión legal. El valor predeterminado es undefined (en español, indefinida).

2. Descripción:
  Las declaraciones de variables, donde sea que ocurran, son procesadas antes de que cualquier otro código sea ejecutado. El ámbito de una variable declarada con la palabra reservada var es su contexto de ejecución en curso*,* que puede ser la función que la contiene o, para las variables declaradas afuera de cualquier función, un ámbito global. Si re-declaras una variable Javascript, esta no perderá su valor.

  Asignar un valor a una variable no declarada implica crearla como variable global (se convierte en una propiedad del objeto global) cuando la asignación es ejecutada. Las diferencias entre una variable declarada y otra sin declarar son:

  2.1 Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales:

  function x() {
   y = 1;   // Lanza un error de tipo "ReferenceError" en modo estricto ('use strict')
    var z = 2;
  }

  x();

  console.log(y); // Imprime "1"
  console.log(z); // Lanza un error de tipo "ReferenceError": z no está definida afuera de x

3. Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado.

  console.log(a);                // Lanza un error de tipo "ReferenceError".
  console.log('trabajando...'); // Nunca se ejecuta.

  var a;
  console.log(a);                // Imprime "undefined" o "" dependiendo del navegador.
  console.log('trabajando...'); // Imprime "trabajando...".

4. Las variables declaradas son una propiedad no-configurable de su contexto de ejecución (de función o global). Las variables sin declarar son configurables (p. ej. pueden borrarse).

  var a = 1;
  b = 2;

  delete this.a; // Lanza un error de tipo "ReferenceError" en modo estricto ('use strict'), de lo contrario falla silenciosamente.
  delete this.b;

  console.log(a, b); // Lanza un error de tipo "ReferenceError".
  // La propiedad 'b' se eliminó y ya no existe.