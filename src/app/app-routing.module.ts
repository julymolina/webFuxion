import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { HomeComponent } from './pages/home/home.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { StoreComponent } from './pages/store/store.component';
import { VitaComponent } from './pages/vita/vita.component';
import { PrunexComponent } from './pages/prunex/prunex.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'vita',
    component: VitaComponent,
  },
  {
    path: 'prunex',
    component: PrunexComponent,
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
  {
    path: 'store',
    component: StoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
