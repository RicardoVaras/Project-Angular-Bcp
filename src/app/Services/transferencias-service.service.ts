import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranferenciaListar } from '../Modelos/Transferencias-Listar';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/transacciones';

  getTransferencias(){
    return this.http.get<TranferenciaListar[]>(this.Url);
  }
}
