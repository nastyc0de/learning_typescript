// Usando angle Brackets <tipo>
let username: any;
username = 'Nasty';

let message: string = (<string>username).length > 5 ? `Hola ${username}` : 'Username is too short';
console.log('Mensaje: ', message);

let usernameWithId: any = 'Andres 1';
// como obtener el username?
username = (<string>usernameWithId).substring(0,6)
console.log('Username:', username);

// sintaxis 'as'
message = (username as string).length > 5 ? `Hola ${username}` : 'Username is too short';
console.log('Mensaje: ', message);

let helloUser: any;
helloUser = 'hello paparazzi';
username = (helloUser as string).substring(6);
console.log('username: ', username);