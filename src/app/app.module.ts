import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { TransactionAddComponent } from './transaction/add/add.component';
import { TransactionAccountComponent } from './transaction/account/account.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { AddComponent } from './Cliente/add/add.component';
import { EditComponent } from './Cliente/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { CuentaBancariaServiceService } from './Services/cuenta-bancaria-service.service';
import { Listar } from './Cuenta-Bancaria/listar/listar.component';
import { TransferenciasServiceService } from './Services/transferencias-service.service';
import { TransactionTemplateComponent } from './transaction/template/template.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TransactionAccountComponent,
    TransactionAddComponent,
    TransactionTemplateComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    Listar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ServiceService, CuentaBancariaServiceService, TransferenciasServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
