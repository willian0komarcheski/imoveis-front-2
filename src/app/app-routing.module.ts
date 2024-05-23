import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { AtualizarComponent } from './Pages/atualizar/atualizar.component';

const routes: Routes = [
  {path: '' , component: InicioComponent},
  {path: 'atualizar/:id', component: AtualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
