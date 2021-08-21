// clases y constructores
export {};

enum PictureOrientation {
    Landscape = 10,
    Portrait = 11,
    Square = 12,
    Panorams = 13
}

class Picture {
    // propiedades
    private id: number;
    private title: string;
    private orientation: PictureOrientation

    public constructor(id: number, title:string, orientation: PictureOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // comportamiento
    public toString(){
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

class Album {
    private id: number;
    private title: string;
    private pictures: Picture[];

    public constructor(id: number, title:string){
        this.id = id;
        this.title = title;
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
// picture.title = 'foto de promo'; //private
// album.title = 'Personal Activities'; //private
console.log('album:', album);