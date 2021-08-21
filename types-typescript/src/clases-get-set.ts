// clases y constructores
export {};

enum PictureOrientation {
    Landscape = 10,
    Portrait = 11,
    Square = 12,
    Panorams = 13
}

// get y set
 
class Picture {
    // propiedades
    private _id: number;
    private _title: string;
    private _orientation: PictureOrientation

    public constructor(id: number, title:string, orientation: PictureOrientation){
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    // id
    get id() {
        return this._id;
    }
    set id(id:number){
        this._id = id;
    }
    // title
    get title() {
        return this._title;
    }
    set title(title:string){
        this._title = title;
    }
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

class Album {
    private _id: number;
    private _title: string;
    private pictures: Picture[];

    public constructor(id: number, title:string){
        this._id = id;
        this._title = title;
        this.pictures = []
    }
    get id() {
        return this._id;
    }
    set id(id:number){
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title:string){
        this._title = title;
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
picture.id = 100; //private
picture.title = 'foto de promo'; //private
album.title = 'Personal Activities'; //private
console.log('album:', album);