// !importar paquetes:
require('colors');
const inquirer = require('inquirer');

// !preguntas:

const preguntas = [
    {
        type: 'list',
        name: 'opciones',
        message: '¿Que desea hacer? \n',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} 📝 Crear una nueva tarea`,
            },
            {
                value: '2',
                name: `${'2.'.green} 📄 Mostrar todas las tareas`,
            },
            {
                value: '3',
                name: `${'3.'.green} ✅ Ver las tareas completadas`,
            },
            {
                value: '4',
                name: `${'4.'.green} 🕙 Ver las tareas pendientes`,
            },
            {
                value: '5',
                name: `${'5.'.green} 📝 Completar tarea(s)`,
            },
            {
                value: '6',
                name: `${'6.'.green} ❌ Borrar tarea(s)`,
            },
            {
                value: '0',
                name: `${'0.'.green} ✋ Salir`,
            },
        ],
    },
];

// !crear menu:
const inquirerMenu = async () => {
    console.clear();

    console.log('=========================================='.green);
    console.log('========== 🥇 MENU PRINCIPAL 🥇 =========='.white);
    console.log('======= 🔢 SELECCIONE UNA OPCION 🔢 ======'.white);
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
                    return ' ❌ Debe ingresar una descripcion';
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
