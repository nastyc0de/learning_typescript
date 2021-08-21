export {};
// tipo void
// void es lo opusto de any. Representa la ausencia de de tipo
// comunmente se usa como tipo de retorno de funciones

// void
// tipo explicito
function showInfo(user: any): any{
    console.log('User Info:',user.id, user.username, user.firstname);
}
showInfo({id:1, username: 'nasty', firstname:'code'})
// tipo inferido
function showWithFormat(user:any){
    console.log(`User Info:
        id:${user.id}, username:${user.username}, name:${user.firstname}`)
}
showWithFormat({id:1, username: 'nasty', firstname:'code'});

// tipo void como tipo de dato
let useless: void;
// useless = null;
// useless = undefined;

// tipo never
// valor que nunca ocurre.
// en funciones que lanzan alguna excepcion.
// en funciones que nunca retornan un valor.
function handleError1(code:number, sms: string):never{
    // procesamiento del codigo
    // generamos un mensaje
    throw new Error(`${sms}. Code:${code}`);

}
try {
    handleError1(404, 'Not found');
    
} catch (error) {
}

function sumNumbers(limit:number):never{
    let sum = 0
    while(true){
        sum++;
    }
    // return sum;
}
sumNumbers(10);
// ciclo infinito, programa nunca termina
