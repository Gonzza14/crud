import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Observable, catchError, throwError } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  rutaGlobal = 'http://localhost:8080/usuario/';
  sharedService!: SharedService;

  constructor(private http: HttpClient) {

  }
  //Crear usuario
  createUsuario(usuario: Usuario):Observable<any> {
    this.getUsuarios().subscribe(usuarios => {
      this.sharedService.updateUsuarios(usuarios);
    });
    return this.http.post<Usuario>('http://localhost:8080/auth/register', usuario, {
      observe: 'response'
    }).pipe(catchError(this.handleError));
  }

  //Obtener usuarios
  getUsuarios() {
    return this.http.get<Usuario[]>(this.rutaGlobal + 'show');
  }

  //Actualizar usuarios
  updateUsuario(usuario: Usuario):Observable<any> {
    return this.http.post<Usuario>(this.rutaGlobal + 'update', usuario, {
      observe: 'response',
    }).pipe(catchError(this.handleError));
  }

  //Eliminar usarios
  eliminarUsuario(id: number) {
    return this.http.post<void>(this.rutaGlobal + 'delete/' + id, {
      observe: 'response',
    });
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }
}
