// los enumerados permiten definir un conjunt de constantes con nombre
// tiene la ventaja de adaptarse al contexto de la aplicacion
// EJEMPLO:
// orientacion para fotografias
// forma clasica
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorams = 3;

// usando enum en typescript
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorams
}
const landscape: PhotoOrientation =PhotoOrientation.Landscape
console.log('landscape: ', landscape);
console.log('Landscape:', PhotoOrientation[landscape]);

// agregando un enumerado diferente
export enum PictureOrientation {
    Landscape = 10,
    Portrait = 11,
    Square = 12,
    Panorams = 13
}
const photo1: PictureOrientation =PictureOrientation.Landscape
console.log('landscape: ', photo1);

enum Country {
    Bolivia = 'Bol',
    Colombia = 'Col',
    EEUU = 'Usa',
    Mexico = 'Mex',
}
const country: Country = Country.Colombia
console.log('country: ', country);