import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.sass']
})
export class InputEmailComponent implements OnInit {
  @Output() sendEmail = new EventEmitter();
  public email: any
  public required = false;
  public msj: string = ''

  constructor() { }

  ngOnInit(): void {

  }

  validateEmail() {
    console.log('this.email :', this.email);
    var match = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
    if (this.email) {
      this.msj = ''
      if (this.email.match(match)) {
        console.log('aqui11');
      } else {
        console.log('aqui22');
      }
      this.sendEmail.emit(this.email);
    } else {
      this.required = true;
      this.msj = 'Te falto poner tu email'
    }
  }
}
