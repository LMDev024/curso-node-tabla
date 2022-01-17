const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base = 5, listar = false, hasta = 10)=>{

    try {


        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += ` ${ base } X ${ i } = ${base * i }\n`;
            consola += ` ${ base } ${ 'X'.blue } ${ i } ${ '='.blue } ${base * i }\n`;
        }

        if(listar){
            console.log(colors.rainbow('======================='));
            console.log(colors.green('     Tabla del:  '), colors.green(base));
            console.log(colors.rainbow('======================='));

            console.log(consola);
        }



        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err
    }



}

module.exports ={
   //  crearArchivo: crearArchivo es redundante, si tienen el mismo nombre se daja solo una declaración
   crearArchivo
}