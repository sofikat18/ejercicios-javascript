//Gimnasio Operaciones Aritméticas

var numUno = parseInt(prompt('Ingresa el primer valor:'));
var numDos = parseInt(prompt('Ingresa el segundo valor:'));

var suma = numUno + numDos;
var resta = numUno - numDos;
var multiplicar = numUno * numDos;
var dividir = numUno / numDos;

console.log('*Ejercicio de operaciones aritméticas*');
console.log('La suma de ambos valores es igual a: ' + suma);
console.log('La resta de ambos valores es igual a: ' + resta);
console.log('La multiplicación de ambos valores es igual a: ' + multiplicar);
console.log('La división de ambos valores es igual a: ' + dividir);

console.log('**************************************************************');

//Gimnasio Condicionales

var edadAspirante = parseInt(
  prompt('¡Bienvenido a Generation! Para continuar, por favor ingresa tu edad:')
);

if (edadAspirante > 17 && edadAspirante < 30) {
  alert('¡¡FELICIDADES!! Bienvenido a Generation...');
} else if (edadAspirante < 18 && edadAspirante > 12) {
  alert(
    'Muchas gracias por tu interés, desafortunadamente aún no cumples con los requisitos del programa. Vuelve cuando tengas 18 años cumplidos.'
  );
} else if (edadAspirante > 29) {
  alert(
    'Muchas gracias por tu interés, desafortunadamente superas la edad requerida para calificar al programa. ¡Ayudanos difundiendo el mensaje para otros jóvenes!'
  );
} else {
  alert(
    'Aún estás muy pequeño para el programa, pero si tienes interés en la programación, dile a tus papás que te ayuden a buscar un programa para ti!'
  );
}

//Gimnasio Nómina

var sueldoDia = parseInt(prompt('Ingresa tu salario por día:'));
var sueldoQuincenaBruto = sueldoDia * 15;
var sueldoMesBruto = sueldoDia * 30;

const imss = sueldoDia * 0.1;
const isr = sueldoDia * 0.3;

var sueldoQuincenaNeto = (sueldoDia - imss - isr) * 15;
var sueldoMesNeto = (sueldoDia - imss - isr) * 30;

console.log('*Ejercicio de nómina*');
console.log('Tu sueldo Quincenal Bruto es: $' + sueldoQuincenaBruto);
console.log('Tu sueldo Mensual Bruto es: $' + sueldoMesBruto);
console.log('Tu sueldo Quincenal Neto es: $' + sueldoQuincenaNeto);
console.log('Tu sueldo Mensual Neto es: $' + sueldoMesNeto);
