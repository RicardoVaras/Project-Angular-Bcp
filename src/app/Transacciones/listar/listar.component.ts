import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { TranferenciaListar } from 'src/app/Modelos/Transferencias-Listar';
import { TransferenciasServiceService } from '../../Services/transferencias-service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarTransaccion implements OnInit {

  TranferenciaLista:TranferenciaListar[];
  constructor(private service:TransferenciasServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getTransferencias()
    .subscribe(data=>{
      this.TranferenciaLista=data;
    })
  }

}
