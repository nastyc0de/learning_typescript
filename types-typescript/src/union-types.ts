// union de tipos
// en ts se puede definir una variable con multiples tipos de datos: union type
// se usa el simbolo de pipe '|' entre los tipos.

// 10. '10'
export {}
// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// // buscar username dado un ID
// function getUsernameById(id: number | string) {
//     // logica de negocio, find the user
//     return 'nastyc0de';
// }

// alias de tipo
// ts permite crear un alias como nuevo tipo de dato.
// el alias se puede aplicar tambien a un conjunto o combinacion de tipos.
// se usa la palabra reservada "type"

// alias de tipos: ts
type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

// buscar username dado un ID
function getUsernameById(id: IdUser): Username {
    // logica de negocio, find the user
    return 'nastyc0de';
}
getUsernameById(20);
getUsernameById('20');

// tipos literales
// puede contener una cadena del conjunto.
// se usan cadenas como "tipos", combinados con el simbolo pipe '|' entre ellos.
type SquareArea = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareArea = '200x200'; //Error
let smallPicture : SquareArea = '100x100';
let medPicture: SquareArea = '500x500';

