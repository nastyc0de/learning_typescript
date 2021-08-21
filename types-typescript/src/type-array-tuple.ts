//  usnado corchetes []

// tipo explicito
let users: string[];
users = ['Andres', 'Pepe', 'Miguel', 'Ana'];
// users = [1, true, 'test'] error

// tipos inferidos
let other_user = ['andres', 'pepe', 'miguel', 'ana']

// usando Array<Tipo>
let picture: Array<string>;
picture = ['a', 'b', 'c'];

// Accediendo a los valores en un array
console.log('first_user: ',users[0]);

// propiedades en array
console.log(users.length);

// uso de funciones en arrays
users.push('Karina');
users.sort();
console.log(users);

// tuplas
// perminten expresar un arreglo con un numero fijo de elementos.
// los tipos de datos son conocidos.
// EJEMPLO
// [1, 'user']
export {};
let user: [number, string];
user = [1, 'Andres']
console.log('user: ', user);

// tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'abc', true]
console.log(userInfo);

// arreglo de tuplas
let array: [number, string][] = [];
array.push([1, 'a']);
array.push([2, 'b']);
array.push([3, 'c']);
console.log(array);

// uso de funciones Array
array[2][1] = array[2][1].concat('casa');
console.log(array);
