//alert('Hola mundo!'); Sirve para mostrar la ventana emergente

var nombre = 'Ana Sofía'; //Declaración de variables
var apellido = 'López de Rivera';
var edad = 29;

console.log(nombre + ' ' + apellido);
console.log('Mi edad es: ' + edad);

var numero = 11; //Declaración de variable como número
var otroNumero = '11'; //Declaración de variable como cadena de texto

/* Usar typeof nos ayuda a mostrar en consola el tipo de dato, en caso
de que el valor se encuentre dentro de comillas '', se identifica como 
una cadena de texto (string)*/

console.log(typeof numero);
console.log(typeof otronumero);

var base = parseInt(prompt('Escribe la base del triángulo:'));
var altura = parseInte(prompt('Escribe la altura del triángulo:'));
var resultado = (base * altura) / 2;
alert('El área del triángulo es: ' + resultado);

/*Cuando usamos el prompt, muestra la cajita de texto, pero lo que se
escribe no se toma como número sólo como un texto, por lo que no se puede
realizar operaciones matemáticas. 

Cuando usamos parseInt el dato se convierte en un número, ya podemos
realizar la operación aritmética para obtener el área*/

/* La buena práctica de programación nos sugiere realizar el cambio de
texto a número */
