import { Injectable } from "@angular/core";
import { Usuario } from "./usuario.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  formData: Usuario;
  list: Usuario[];
  readonly rootURL = "http://localhost:8000/api";

  constructor(private http: HttpClient) {}

  postUsuario(formData: Usuario) {
    console.log(formData);
    return this.http.post(this.rootURL + "/usuarios", formData);
  }

  putUsuario(formData: Usuario) {
    console.log(formData);
    return this.http.put(this.rootURL + "/usuarios/" + formData.id, formData);
  }

  getUsuarios(correo: string = "") {
    console.log(correo);
    this.http
      .get(this.rootURL + "/usuarios/" + correo)
      .toPromise()
      .then(res => (this.list = res as Usuario[]));
  }
}
