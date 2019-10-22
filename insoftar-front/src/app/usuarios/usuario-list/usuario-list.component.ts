import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/services/usuario.service";
import { Usuario } from "src/app/services/usuario.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-usuario-list",
  templateUrl: "./usuario-list.component.html",
  styleUrls: ["./usuario-list.component.css"]
})
export class UsuarioListComponent implements OnInit {
  constructor(private service: UsuarioService) {}

  ngOnInit() {
    this.service.getUsuarios();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      id: null,
      nombres: "",
      apellidos: "",
      cedula: "",
      telefono: "",
      correo: ""
    };
  }

  llenarForm(us: Usuario) {
    this.service.formData = Object.assign({}, us);
  }

  llenarTabla(us: Usuario) {
    this.service.getUsuarios();
  }

  getUsuarioCorreo(form: NgForm) {
    console.log(form.value.correo);
    this.service.getUsuarios(form.value.correo);
    form.resetForm();
  }
}
