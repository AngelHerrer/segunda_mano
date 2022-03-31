import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'segunda-mano'
  logo = '../assets/logo_med.jpeg'
  usr = '../assets/icon-user.jpeg'
  myModal = true
  Usuarios: any

  ngOnInit(): void {
    this.Usuarios = JSON.parse(localStorage.getItem('user')!)
  }
  
  mostrarModal(): void {
    this.myModal = true
  }

  cerrarModal(e: boolean) {
    this.myModal = e
  }
}