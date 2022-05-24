// !importar modelos

const Tarea = require('./tarea');
class Tareas {
    _listado = {};

    // !get listado:
    get listadoArray() {
        const listado = [];
        Object.keys(this._listado).forEach((key) => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    // !metodos:

    agregarTareaArray(tareas = []) {
        tareas.forEach((tarea) => {
            this.agregarTarea(tarea);
        });
    }
    // !agregar tarea:
    agregarTarea(description = '') {
        const tarea = new Tarea(description);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;
