// interfaces
export {};
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorams
}
interface IPicture {
    title: string;
    date: string;
    orientation: PhotoOrientation;
}
const showPicture = (picture:IPicture) => {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`)
}

const myPic:IPicture = {
    title: 'dia1',
    date: '2020-10-10',
    orientation: PhotoOrientation.Landscape

}
showPicture(myPic);

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
}
const generatePicture = (config:PictureConfig) =>{
    const pic = {title: 'Default', date: '2020-12'};
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date = config.date;
    }
    return pic;
}

let picture = generatePicture({});
console.log('picture:', picture);

picture = generatePicture({title:'travel pic'});
console.log('picture:', picture);

// interfaces de modo lectura "readonly"
interface IUser {
    readonly id: number;
    name: string;
    isPro: boolean;
}
let user:IUser;
user = {
    id:1,
    name:'nasty',
    isPro:true
}
console.log('user: ',user);
user.name = 'code';
console.log('user: ',user);
// user.id = 20; //error
// console.log('user: ',user);


