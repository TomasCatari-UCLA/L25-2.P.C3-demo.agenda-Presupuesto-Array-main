export default class Cl_mAgenda {
    constructor() {
        this.agenda = [];
    }
    agregarRegistro({ Registro, callback, }) {
        // Validar que el registro no tenga errores
        let error = Registro.error();
        if (error) {
            callback(error);
            return;
        }
        this.agenda.push(Registro);
        callback(false);
    }
    listar() {
        let lista = [];
        this.agenda.forEach((Registro) => {
            lista.push(Registro.toJSON());
        });
        return lista;
    }
}
