import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public password: string | undefined
  public email = '';
  public msj = '';

  constructor(private _loginService: LoginService,
    private _modal: ModalComponent) {
  }

  ngOnInit(): void {
    
  }

  getPassword(password: string) {
    this.password = password
  }

  getEmail(email: string) {
    this.email = email;
  }

  validate() {
    if (!this.email || !this.password) {
      this.msj= 'Ingrese su correo y contraseña'
      return false;
    }

    if (!this.password) {
      this.msj= 'Ingrese su contraseña'
      return false;
    }
    let variable = this._loginService.consultaDatos(this.email)[0];
    if (variable) {
      if (variable.pass === this.password) {
        console.log('contraseña valida')
        this.msj= 'contraseña valida'
        this._modal.closeModal();
        return true;
      } else {
        this.msj= 'Contraseña incorrecta'
        console.log('contraseña NO valida')
        return false;
      }
    } else {
      this.msj= 'Usuario incorrecto'
      console.log('Usuario incorrecto')
      return false;
    }

  }
}
