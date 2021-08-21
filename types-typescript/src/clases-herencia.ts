// clases y constructores
export {};

enum PictureOrientation {
    Landscape = 10,
    Portrait = 11,
    Square = 12,
    Panorams = 13
}
// superclase
abstract class Item {
    protected readonly _id:number;
    protected _title: string;

    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    // set id(id:number){
    //     this._id = id;
    // }
    // title
    get title() {
        return this._title;
    }
    set title(title:string){
        this._title = title;
    }
}

// get y set
 
export class Picture extends Item {
    public static photoOrientation = PictureOrientation;
    // propiedades
    private _orientation: PictureOrientation

    public constructor(id: number, title:string, orientation: PictureOrientation){
        super(id, title);
        // this._id = id;
        // this._title = title;
        this._orientation = orientation;
    }
    // id
    
    // orientation
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation:PictureOrientation){
        this._orientation = orientation;
    }

    // comportamiento
    public toString(){
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

export class Album extends Item {
    private pictures: Picture[];

    public constructor(id: number, title:string){
        super(id, title);
        this.pictures = []
    }
    public addPicture(picture: Picture){
        this.pictures.push(picture)
    }
}

const album: Album = new Album(1,'viaje');
const picture: Picture = new Picture(1, 'foto1', PictureOrientation.Square)
album.addPicture(picture)

console.log('album: ', album);

// accediendo a los miembros publicos
// picture.id = 100; //private
picture.title = 'foto de promo'; //private
album.title = 'Personal Activities'; //private
console.log('album:', album);

// clases abstractas
// Son la base de donde otras clases podrian derivarse.
// A diferencia de una interfaz, una clase abstracta puede implementar funciones para sus instancias.

// const item = new Item(1, 'Test title'); //error
// console.log('item', item);

// propiedades estaticas y propiedades de solo lectura
// Las clases definen con atributos y metodos, aplicables a las instancias de las mismas.

// probando el static
console.log('Photo orientation: ', Picture.photoOrientation.Landscape)