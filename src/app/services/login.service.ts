import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public datos: any;

  constructor() { }

  consultaDatos(user: string) {
    this.datos = JSON.parse(localStorage.getItem('user')!);
    let aqui = this.datos.filter((item: any) => item.email.toLowerCase().indexOf(user) !== -1);
    return aqui;
  }
}
