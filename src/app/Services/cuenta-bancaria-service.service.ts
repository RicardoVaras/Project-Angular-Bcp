import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CuentaBancaria } from '../Modelos/Cuenta-Bancaria';

@Injectable({
  providedIn: 'root'
})
export class CuentaBancariaServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/cuentasbancarias';

  getCuentasBancarias(){
    return this.http.get<CuentaBancaria[]>(this.Url);
  }
}
