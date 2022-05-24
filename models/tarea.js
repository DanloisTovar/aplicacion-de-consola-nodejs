const { v4: uuidv4 } = require('uuid');

class Tarea {
    id = '';
    description = '';
    completado = null;

    constructor(description) {
        this.id = uuidv4();
        this.description = description;
    }
}

module.exports = Tarea;
