// null y undefined
// null y undefined se pueden asumir como subtipos de los otros tipos de datos.
// significa que se pueden asignar null y undefined a otra variable

// tipo null
// de forma explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; //error

let otherVariable = null;
otherVariable = 'test';

// undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test' //error

let otherUndefined = undefined;
otherUndefined = 1;
console.log(otherUndefined);

// null y undefined como subtipos
// --strictNullChecks
// let albumName = null;
// albumName = null;
// albumName = undefined;

// tipo de null y undefined
// usando la opcion --strictNullChecks

// solo permite asignar null y undefined a una variable de tipo any o sus tipos respectivos.
// ayuda a evitar errores comunes en programacion de apps en Javascript.