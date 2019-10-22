import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { GlobalHttpInterceptorService } from "./error-handling.interceptor";

import { AppComponent } from "./app.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { UsuarioComponent } from "./usuarios/usuario/usuario.component";
import { UsuarioListComponent } from "./usuarios/usuario-list/usuario-list.component";
import { UsuarioService } from "./services/usuario.service";

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioComponent,
    UsuarioListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UsuarioService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
