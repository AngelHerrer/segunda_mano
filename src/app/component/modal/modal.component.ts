import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {


  @Input() visible: boolean | undefined;
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  loginRegister: string = 'login'

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.close.emit(false);
  }

  evento(modal: string) {
    //this.loginRegister = this.loginRegister == 'login' ? 'register' : 'login'
    this.loginRegister = modal
  }

}
