import { Login } from './login';

export class Usuario extends Login {
  /**
   *
   */
  constructor(email?: string, senha?: string) {
    super(email, senha);
  }
}
