import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private usuariosSource = new BehaviorSubject<Array<Usuario>>([]);
  usuarios$ = this.usuariosSource.asObservable();

  private usuarioParaEditarSource = new BehaviorSubject<Usuario | null>(null);
  usuarioParaEditar$ = this.usuarioParaEditarSource.asObservable();

  updateUsuarios(usuarios: Array<Usuario>) {
    this.usuariosSource.next(usuarios);
  }
  setUsuarioParaEditar(usuario: Usuario | null) {
    this.usuarioParaEditarSource.next(usuario);
  }
}
