
//const { argv } = require('process');
const { options } = require('yargs');
const { crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
/*
 MI FORMA DE RESOLVERLO

for (let index = 1; index <= 10; index++) {
    console.log('5 X '+ index + '= '+ index*5);
}

Forma del curso

const base = 5;
for (let i = 1; i <= 10; i++) {
 console.log(` ${ base } X ${ i } = ${base * i }`);
}
*/

//
//estudiar promesas
//para limpiar la consola antes de ejecutar
console.clear();


//console.log(process.argv);
//console.log(argv);


//const [,,arg3 = 'base=5'] = process.argv;
//const [ , base = 5]= arg3.split('=');
//console.log(base);


//const base = 10;

crearArchivo(argv.b, argv.l, argv.h)
 .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
 .catch( err => console.log(err) );