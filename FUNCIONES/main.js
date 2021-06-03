//Función suma
/*1. Crear una función que reciba por parámetros 2 números y los sume. 
Imprimir por console.log diferentes sumas
*/

function suma(a, b) {
  console.log(`${a} + ${b} = ` + (a + b));
}

suma(5, 2);
suma(6, 8);
suma(20, 53);
suma(18, 83);
suma(129, 281);

//Función arreglo de meses
// 2. Crear un arreglo de meses y por console.log imprimir los meses.

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

console.log(meses);

//Ciclo
//3. Crear un ciclo en donde se imprima el arreglo de meses

for (let i = 0; i < 12; i++) {
  console.log(meses[i]);
}
