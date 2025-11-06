import Cl_mRegistro, { iRegistro } from "./Cl_mRegistro.js";

export default class Cl_mAgenda {
  private agenda: Cl_mRegistro[] = [];
  agregarRegistro({
    Registro,
    callback,
  }: {
    Registro: Cl_mRegistro;
    callback: (error: string | false) => void;
  }): void {
    // Validar que el registro no tenga errores
    let error = Registro.error();
    if (error) {
      callback(error);
      return;
    }
    this.agenda.push(Registro);
    callback(false);
  }
  listar(): iRegistro[] {
    let lista: iRegistro[] = [];
    this.agenda.forEach((Registro) => {
      lista.push(Registro.toJSON());
    });
    return lista;
  }
}
