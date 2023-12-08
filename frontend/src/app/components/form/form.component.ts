import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { TableComponent } from '../table/table.component';
import { SharedService } from '../../services/shared/shared.service';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TableComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit, OnDestroy {
  usuarioParaEditar: Usuario | null = null;
  errorMessage: String = '';
  succesMessage: String = '';
  /*usuarios: Array<Usuario> | undefined*/
  formUsuario: FormGroup;
  userLoginOn: boolean = false;
  private usuarioSubscription: Subscription;
  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private sharedService: SharedService,
    private loginService: LoginService
  ) {
    this.formUsuario = this.createForm();
    this.usuarioSubscription = this.sharedService.usuarioParaEditar$.subscribe(
      (usuario) => {
        this.usuarioParaEditar = usuario;
        this.patchFormValues();
      }
    );

    this.loginService.userLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      },
    });
  }

  get names() {
    return this.formUsuario.controls['names'];
  }

  get lastnames() {
    return this.formUsuario.controls['lastnames'];
  }

  get username() {
    return this.formUsuario.controls['username'];
  }

  get password() {
    return this.formUsuario.controls['password'];
  }

  get email() {
    return this.formUsuario.controls['email'];
  }

  get tel() {
    return this.formUsuario.controls['tel'];
  }

  get address() {
    return this.formUsuario.controls['address'];
  }

  ngOnInit() {
    // Inicialmente, si hay un usuario para editar, llenar el formulario
    if (this.usuarioParaEditar) {
      this.patchFormValues();
    }
  }

  ngOnDestroy() {
    // Importante: Desuscribirse para evitar fugas de memoria
    this.usuarioSubscription.unsubscribe();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      names: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/),
      ]),
      lastnames: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9_-]{3,20}$/),
      ]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{8}$/),
      ]),
      address: new FormControl(''),
    });
  }

  private patchFormValues() {
    if (this.usuarioParaEditar) {
      this.formUsuario.patchValue({
        names: this.usuarioParaEditar.names,
        lastnames: this.usuarioParaEditar.lastnames,
        username: this.usuarioParaEditar.username,
        password: this.usuarioParaEditar.password,
        email: this.usuarioParaEditar.email,
        tel: this.usuarioParaEditar.tel,
        address: this.usuarioParaEditar.address,
      });
    }
  }

  //Guardar usuario
  guardarUsuario() {
    if (this.formUsuario.valid) {
      const usuario: Usuario = this.formUsuario.value;

      if (this.usuarioParaEditar) {
        // Modificar usuario existente
        usuario.id = this.usuarioParaEditar.id;
        usuario.password = this.usuarioParaEditar.password;
        if (this.formUsuario.valid) {
          this.usuarioService.updateUsuario(usuario).subscribe({
            next: () => {
              this.usuarioService.getUsuarios().subscribe((usuarios) => {
                this.sharedService.updateUsuarios(usuarios);
              });
              this.usuarioParaEditar = null;
              this.errorMessage = "";
            },
            error: (errorData) => {
              console.error(errorData);
              this.errorMessage = errorData;
            },
            complete: () => {
              this.formUsuario.reset();
            },
          });
        } else {
          this.formUsuario.markAllAsTouched();
          alert('Error al ingresar los datos.');
        }
      } else {
        // Crear nuevo usuario
        if (this.formUsuario.valid) {
          this.usuarioService.createUsuario(usuario).subscribe({
            next: () => {
              this.usuarioService.getUsuarios().subscribe((usuarios) => {
                this.sharedService.updateUsuarios(usuarios);
              });
              this.usuarioParaEditar = null;
              this.errorMessage = "";
            },
            error: (errorData) => {
              console.error(errorData);
              this.errorMessage = errorData;
            },
            complete: () => {
              this.formUsuario.reset();
            },
          });
        } else {
          this.formUsuario.markAllAsTouched();
          alert('Error al ingresar los datos.');
        }
      }
    }
  }

  limpiar() {
    this.formUsuario.reset();
    this.usuarioParaEditar = null;
  }
}
