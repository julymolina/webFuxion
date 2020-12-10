import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { HomeComponent } from './pages/home/home.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { TerminosComponent } from './pages/terminos/terminos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'empresa',
    component: EmpresaComponent,
  },
  {
    path: 'politicas',
    component: PoliticasComponent,
  },
  {
    path: 'terminos',
    component: TerminosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
