// object
// es el tipo de dato que representa un valor no primitivo
// es el tipo para variable que no sea number, boolean, null, undefined, etc.

let userData: object;
userData = {}; //Object

userData = {
    id:1,
    nameuser: 'nasty',
    lastname: 'code',
    isPro: true
}
console.log('user: ', userData);

// Object vs object
// Object: instancia de la clase Object de Javascript
// object: tipo de valores no primitivos. con este tipo de datos no se puede acceder a las propiedades del objeto.

// Object vs object(Clase JS vs tipo TS)
const userObj = {
    id:1,
    nameuser: 'nasty',
    lastname: 'code',
    isPro: true
};

const isInstance = userObj instanceof Object; //clase Object Javascript
console.log(isInstance);