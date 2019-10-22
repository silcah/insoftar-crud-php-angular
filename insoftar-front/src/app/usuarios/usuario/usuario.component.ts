import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/services/usuario.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"]
})
export class UsuarioComponent implements OnInit {
  errorMessage = "";
  constructor(private service: UsuarioService, private toastr: ToastrService) {}

  ngOnInit() {
    this.resetForm();
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

  onGuardar(form: NgForm) {
    if (form.value.id == null) this.insertUser(form);
    else this.updateUser(form);
  }

  onReset(form: NgForm) {
    this.resetForm(form);
  }

  insertUser(form: NgForm) {
    this.service.postUsuario(form.value).subscribe(
      res => {
        this.toastr.success("Usuario registrado", "Registro");
        this.resetForm(form);
        this.service.getUsuarios();
      },
      error => {
        if (
          error.error.errors.cedula == null &&
          error.error.errors.corre == null
        )
          this.errorMessage = error.message;
        else if (error.error.errors.cedula != null)
          this.errorMessage = error.error.errors.cedula[0];
        else if (error.error.errors.correo != null)
          this.errorMessage = error.error.errors.correo[0];

        console.log(error.error.errors.correo);
        console.log(error.error.errors.cedula == null);
        //this.errorMessage = error.error.errors;
        this.toastr.error(this.errorMessage);
      }
    );
  }

  updateUser(form: NgForm) {
    this.errorMessage = "";
    this.service.putUsuario(form.value).subscribe(res => {
      this.toastr.success("Usuario modificado", "Registro");
      this.resetForm(form);
      this.service.getUsuarios();
    });
  }
}
