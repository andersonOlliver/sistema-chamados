import { Usuario } from './../models/usuario';
import { Login } from './../models/login';
import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor() {}

  login(login: Login): boolean {
    const usuarioSalvo = <Usuario>JSON.parse(localStorage.getItem(login.email));
    if (isNullOrUndefined(usuarioSalvo)) {
      return false;
    }

    return usuarioSalvo.senha === login.senha;
  }

  cadastrar(usuario: Usuario): boolean {
    const usuarioSalvo = <Usuario>(
      JSON.parse(localStorage.getItem(usuario.email))
    );

    if (isNullOrUndefined(usuarioSalvo)) {
      localStorage.setItem(usuario.email, JSON.stringify(usuario));
      return true;
    }
    return false;
  }
}
