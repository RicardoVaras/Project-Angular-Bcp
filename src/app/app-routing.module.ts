import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './Cliente/add/add.component';
import { EditComponent } from './Cliente/edit/edit.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { Listar } from './Cuenta-Bancaria/listar/listar.component';
import { ListarTransaccion } from './Transacciones/listar/listar.component';

const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'edit', component:EditComponent},
  {path: 'add', component:AddComponent},
  {path: 'listar-Cuenta-Bancaria', component:Listar},
  {path: 'transaccion', component:ListarTransaccion},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
