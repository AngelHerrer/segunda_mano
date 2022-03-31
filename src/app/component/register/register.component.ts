import { Component, Input, OnInit } from '@angular/core'
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {

  @Input() pass: any


  private password1: string | undefined
  private password2: string | undefined
  private email: string | undefined
  public msj: string | undefined
  public required: boolean | undefined
  public disabledd: boolean | undefined
  constructor(private _modal: ModalComponent) {

  }
  ngOnInit(): void {
  }


  passwordConfirm(passConfirm: string) {
    this.password2 = passConfirm
    this.msj = ''
    this.required = false
    this.disabledd = true
    if (this.password1 === this.password2) {
      this.disabledd = true
      return true
    } else {
      this.msj = 'La contraseña no coincide',
        this.required = true,
        this.disabledd = false
      return false
    }
  }
  password(password: string) {
    this.password1 = password
  }
  getEmail(email: string) {
    this.email = email
    console.log('email :', email)
  }

  confirmPassword() {
    var users = {
      'email': this.email,
      'pass': this.password1
    }
    console.log('this.user: ', users)
    this.setData(users)
  }

  setData(data: object) {
    const jsonData = JSON.stringify(data)
    var a = []
    a = JSON.parse(localStorage.getItem('user')!) || []
    a.push(data)
    localStorage.setItem('user', JSON.stringify(a))
    this._modal.evento('final')
  }
}
