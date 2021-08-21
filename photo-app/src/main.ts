import { Album } from './album';
import { PhotoOrientation } from './enums/photoOrientation';
import { Picture } from './picture';
import { User } from './user';

const user = new User(1, '2d', 'Nasty', true);
const album = new Album(1, 'viaje');
const picture = new Picture(1, '2d', 'Nasty', PhotoOrientation.Landscape);

// creamos relaciones
user.addAlbum(album)
album.addPicture(picture);

console.log('user: ', user);

user.removeAlbum(album);
console.log('user: ', user);