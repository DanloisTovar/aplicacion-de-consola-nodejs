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
            this._listado[tarea.id] = tarea;
        });
    }
    // !agregar tarea:
    agregarTarea(description = '') {
        const tarea = new Tarea(description);
        this._listado[tarea.id] = tarea;
    }

    // !listado completo:

    listadoCompleto() {
        this.listadoArray.forEach((tarea, key) => {
            const indice = `${(key += 1)}`.green;
            const tareax = `${'Descripcion: '}`.blue;
            const { description, completado } = tarea;
            const estado = completado ? 'Completado'.green : 'Pendiente'.red;
            console.log(
                `${indice}. ${tareax}` +
                    ` ${description}`.yellow +
                    ` | Estado: ${estado}`,
            );
        });
    }
}

module.exports = Tareas;
