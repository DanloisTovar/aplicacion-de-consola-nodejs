/* 
!paquetes necesarios
colors: para colores en la consola: https://www.npmjs.com/package/colors
*/
require('colors');

const mostrarMenu = () => {
    return new Promise((resolve) => {
        console.clear();
        console.log('====================================');
        console.log('========== 🥇 MENU PRINCIPAL 🥇 ==========');
        console.log('======= 🔢 SELECCIONE UNA OPCION 🔢 ======');
        console.log('==================================== \n');

        console.log(`${'1'.green} Crear una nueva tarea`);
        console.log(`${'2'.green} Ver todas las tareas`);
        console.log(`${'3'.green} Ver tareas completadas`);
        console.log(`${'4'.green} Ver tareas pendientes`);
        console.log(`${'5'.green} Completar tarea(s)`);
        console.log(`${'0'.green} Salir \n`);

        // tomar datos del usuario en la consola:
        // !se una una librerioa propia de nodejs (readline) se configura con el input y output de la consola.

        const readline = require('readline').createInterface({
            // inmsertar una linea en la consola:
            input: process.stdin,
            // imprimir una linea en la consola:
            output: process.stdout,
        });
        readline.question('Ingrese una opcion: ', (opcion) => {
            readline.close();
            resolve(opcion);
            console.clear();
        });
    });
};

// !pausar aplicacion:

const pausa = () => {
    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            // inmsertar una linea en la consola:
            input: process.stdin,
            // imprimir una linea en la consola:
            output: process.stdout,
        });

        readline.question(
            `\n Presione ${'ENTER'.yellow} para continuar 👽 : \n `,
            (opcion) => {
                readline.close();
                console.clear();
                resolve();
            },
        );
    });
};

module.exports = {
    mostrarMenu,
    pausa,
};
