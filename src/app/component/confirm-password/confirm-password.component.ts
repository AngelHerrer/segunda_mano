import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.sass']
})
export class ConfirmPasswordComponent implements OnInit {

  public data = { password_confirm: '' }

  @Output() sendPassConfirm = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  validatePasswordConfirm(){
    this.sendPassConfirm.emit(this.data.password_confirm)
  }
}
