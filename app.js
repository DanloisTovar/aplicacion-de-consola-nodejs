/* 
!paquetes necesarios
colors: para colores en la consola: https://www.npmjs.com/package/colors
 */
require('colors');
const { inquirerMenu, pausa, crearInput } = require('./helpers/inquirer');
const { guardarDB, leerDb } = require('./helpers/guardarArchivos');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

// !importar modulos:

const main = async () => {
    let opcion = '';

    const tareas = new Tareas();

    // !tareas para leer archivos:
    const tareasDB = leerDb();

    // !verificar que exista tareas para leer:

    if (tareasDB) {
        // !cargar tarea:
        tareas.agregarTareaArray(tareasDB);
    }

    do {
        opcion = await inquirerMenu();
        // console.log({ opcion });

        switch (opcion) {
            case '1':
                const descripcion = await crearInput(
                    '📝 Ingrese la descripcion de la tarea:',
                );
                tareas.agregarTarea(descripcion);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarTareasCompletadas();
                break;
            case '4':
                tareas.listarTareasPendientes();
        }

        guardarDB(tareas.listadoArray);
        await pausa();
    } while (opcion !== '0');
};

main();

// todo: cambiar a libreria inquirer.
