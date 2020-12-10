import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './Cliente/add/add.component';
import { EditComponent } from './Cliente/edit/edit.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { TransactionTemplateComponent } from './transaction/template/template.component';
import { Listar } from './Cuenta-Bancaria/listar/listar.component';

const routes: Routes = [
  {path: 'transacciones', component: TransactionTemplateComponent},
  {path: 'listar', component:ListarComponent},
  {path: 'edit', component:EditComponent},
  {path: 'add', component:AddComponent},
  {path: 'listar-Cuenta-Bancaria', component:Listar},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
