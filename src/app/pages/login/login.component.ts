import { Usuario } from './../../models/usuario';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { CadastroUsuario } from '../../models/cadastro-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public cadastro: CadastroUsuario;
  public login: Login;

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.login = new Login();
    this.cadastro = new CadastroUsuario();
  }

  public entrar() {
    console.log(this.login);
    const resposta = this._usuarioService.login(this.login);

    console.log(resposta);
  }

  public cadastrar() {
    console.log(this.cadastro);
    const usuario = new Usuario(this.cadastro.email, this.cadastro.senha);
    const resposta = this._usuarioService.cadastrar(usuario);

    if (resposta) {
      this.cadastro = new CadastroUsuario();
      
    }

    console.log(resposta);
  }
}
