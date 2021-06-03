//Objetos

/**Crear un objeto que se llame persona, el ejemplo debe tener 
un nombre, sus apellidos, edad y debe tener un método para saludar. Otro método 
donde diga su edad.
En consola imprimir el resultado de ambos métodos*/

let persona = {
  nombre: 'Ana Sofia',
  apellidos: 'López de Rivera',
  edad: 29,
  saludo: function () {
    console.log(
      'Hola! Mi nombre es ' + this.nombre + ' ' + this.apellidos + '.'
    );
  },
  cuantosAños: function () {
    console.log('Tengo ' + this.edad + ' años.');
  },
};

persona.saludo();
persona.cuantosAños();

/**Hacer una función donde le pasemos los parametros (nombre, apellidos, edad,)
 * esta funcion tendrá dentro un objeto
 * los datos que reciba la función llenarán el objeto.
 * La función debe retornar el objeto.
 */

function bienvenida(nombre, apellido, edad) {
  let persona = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    saludo: function () {
      console.log(
        'Hola! Mi nombre es ' + this.nombre + ' ' + this.apellido + '.'
      );
    },
    cuantosAños: function () {
      console.log('Tengo ' + this.edad + ' años.');
    },
  };

  persona.saludo();
  persona.cuantosAños();
}

bienvenida('Luisa', 'Perez', '25');
bienvenida('Andres', 'Garza', '18');
