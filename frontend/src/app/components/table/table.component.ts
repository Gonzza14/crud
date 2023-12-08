import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { FormComponent } from '../form/form.component';
import { SharedService } from '../../services/shared/shared.service';
import { ConfirmationService } from '../../services/confirmation/confirmation.service';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  errorMesage: String = "";
  usuarios: Array<Usuario> = [];
  userLoginOn:boolean=false;


  constructor(
    private usuarioService: UsuarioService,
    private sharedService: SharedService,
    private confirmationService: ConfirmationService,
    private loginService: LoginService
  ) {

    this.loginService.userLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    })
  }
  ngOnInit(): void {
    this.sharedService.usuarios$.subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
    this.getUsuario();
  }

  //Obtener personas
  getUsuario() {
    this.usuarioService.getUsuarios().subscribe({
      next: (userData) => {
        this.usuarios = userData;
      },
      error: (errorData) => {
        this.errorMesage=errorData
      },
      complete: () => {
        console.info("Datos de usarios correctos")
      }
    });
  }

  //Eliminar personas
  eliminarUsuario(id: number, event: Event) {
    this.confirmationService.openConfirmationModal().then((confirmado) => {
      if (confirmado) {
        // Lógica para eliminar el registro
        this.usuarioService.eliminarUsuario(id).subscribe((res) => {
          this.getUsuario();
        });
      }
    });
    event.preventDefault();
  }

  editarUsuario(usuario: Usuario, event: Event) {
    // Pasa el usuario seleccionado al servicio compartido
    this.sharedService.setUsuarioParaEditar(usuario);
    event.preventDefault();
  }
}
