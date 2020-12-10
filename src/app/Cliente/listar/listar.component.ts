import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Cliente } from 'src/app/Modelos/Cliente';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes:Cliente[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe(data=>{
      this.clientes=data;
    })
  }

}
