import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { AtualizarComponent } from './Pages/atualizar/atualizar.component';
import { CorretorFormsComponent } from './Forms/corretor-forms/corretor-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AtualizarComponent,
    CorretorFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
