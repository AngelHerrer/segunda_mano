import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.sass']
})
export class InputPasswordComponent {
  @Input() visible: boolean | undefined;
  public showPassword: boolean | undefined;
  public data = { password: '' }
  match: any
  @Output() sendPass = new EventEmitter();
  public required = false;
  public msj: string = ''

  validatePassword(): boolean {
    if (this.data.password) {
      this.required = false;
      this.msj = ''
      if (this.data.password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/)) {
        console.log('bien');
        this.sendPass.emit(this.data.password);
        return true
      } else {
        this.required = true;
        this.msj = " Usa al menos 5 caractéres "+ '\n' +"  Al menos una letra Mayuscula "+ '\n' +" Al menos un número";
        return false
      }
    } else {
      this.required = true;
      this.msj = 'Necesitas una contraseña'
      return false;
    }
  }
}
