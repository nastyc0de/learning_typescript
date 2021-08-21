// funciones

// los parametros en las funciones son tipados.
// se pueden definir parametros opcionales.
// el tipo de retorno puede ser un tipo basico, enum, alias, tipo literal o una combinacion de ellos.

// crear una fotografia en javascript
// function createPicture(title, date, size){
//     title
// }
// usando TS, definimos tipos para parametros
type SquareSize = '100x100'| '500x500'|'1000x100';
// function createPicture(title:string, date:string, size: SquareSize){
//     console.log('create Picture: ', title, date, size)
// }

// createPicture('My birthday', '2020-03-10', '1000x100');
// createPicture('Colombia trip', '2020-03');

// parametros opcionales
function createPicture(title:string, date?:string, size?: SquareSize){
    console.log('create Picture: ', title, date, size)
}
createPicture('My birthday', '2020-03-10', '1000x100');
createPicture('Colombia trip', '2020-03');

// flat array function
let createPic = (title:string, date:string, size:SquareSize): object => {
    return {
        title,
        date,
        size
    }
}

const picture2 = createPic('Udemy', '2020-10-1', '1000x100')
console.log('picture: ',picture2);

// tipo de retorno con Typescript
export {};
function handleError(code:number, msg:string): never | string {
    // Procesamiento del codigo, mensaje
    if (msg === 'error') {
        throw new Error(`${msg}. code error: ${code}`)
    } else{
        return 'An error has occurred';
    }
}
let result = handleError(200, 'Ok');
console.log(result);
result = handleError(404, 'error')
console.log('res: ',result);