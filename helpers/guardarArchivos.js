// !importar fileSysten pra guardar archivos

const fs = require('fs');

// !guardar archvivos:
const archivo = './db/data.json';

const guardarDB = (data) => {
    // !como esta va hacer llamado desde la raiz app, se debe de poner la ruta desde raiz:

    // !para guardar archivos, se debe de usar el metodo writeFileSync:
    fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDb = () => {
    // !para leer archivos, se debe de usar el metodo readFileSync:
    if (!fs.existsSync(archivo)) {
        return [];
    } else {
        const data = JSON.parse(fs.readFileSync(archivo, 'utf-8'));
        console.log(data);
        return data;
    }
};

module.exports = { guardarDB, leerDb };
