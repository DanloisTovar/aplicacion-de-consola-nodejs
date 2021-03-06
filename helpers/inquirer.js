// !importar paquetes:
require('colors');
const inquirer = require('inquirer');

// !preguntas:

const preguntas = [
    {
        type: 'list',
        name: 'opciones',
        message: 'Â¿Que desea hacer? \n',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} ð Crear una nueva tarea`,
            },
            {
                value: '2',
                name: `${'2.'.green} ð Mostrar todas las tareas`,
            },
            {
                value: '3',
                name: `${'3.'.green} â Ver las tareas completadas`,
            },
            {
                value: '4',
                name: `${'4.'.green} ð Ver las tareas pendientes`,
            },
            {
                value: '5',
                name: `${'5.'.green} ð Completar tarea(s)`,
            },
            {
                value: '6',
                name: `${'6.'.green} â Borrar tarea(s)`,
            },
            {
                value: '0',
                name: `${'0.'.green} â Salir`,
            },
        ],
    },
];

// !crear menu:
const inquirerMenu = async () => {
    console.clear();

    console.log('=========================================='.green);
    console.log('========== ð¥ MENU PRINCIPAL ð¥ =========='.white);
    console.log('======= ð¢ SELECCIONE UNA OPCION ð¢ ======'.white);
    console.log('========================================== \n'.green);

    // !traer y mostrar preguntas:
    const { opciones } = await inquirer.prompt(preguntas);

    return opciones;
};

// !crear pausa:
const pausa = async () => {
    const pregunta = [
        {
            type: 'input',
            name: 'pausa',
            message: `Presione ${'ENTER'.green} para continuar...`,
        },
    ];

    console.log('\n');

    await inquirer.prompt(pregunta);
};

const crearInput = async (message) => {
    const pregunta = [
        {
            type: 'input',
            name: 'descripcion',
            message,
            validate: (value) => {
                if (value.length === 0) {
                    return ' â Debe ingresar una descripcion';
                } else {
                    return true;
                }
            },
        },
    ];

    console.log('\n');

    const { descripcion } = await inquirer.prompt(pregunta);

    return descripcion;
};
module.exports = { inquirerMenu, pausa, crearInput };
