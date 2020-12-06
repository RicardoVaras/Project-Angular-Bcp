import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionTemplateComponent } from './transaction/template/template.component';

const routes: Routes = [
  {
    path: 'transacciones',
    component: TransactionTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
