import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { CuentaBancaria } from 'src/app/Modelos/Cuenta-Bancaria';
import { CuentaBancariaServiceService } from '../../Services/cuenta-bancaria-service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class Listar implements OnInit {

  cuentasbancarias:CuentaBancaria[];
  constructor(private service:CuentaBancariaServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getCuentasBancarias()
    .subscribe(data=>{
      this.cuentasbancarias=data;
    })
  }

}
