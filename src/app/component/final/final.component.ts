import { Component, OnInit } from '@angular/core'
import { ModalComponent } from '../modal/modal.component'
@Component({
  selector: 'final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.sass']
})
export class FinalComponent implements OnInit {

  constructor(private _modal: ModalComponent) { }

  ngOnInit(): void {
  }

  aceptar(){
    this._modal.closeModal()
  }
}
