import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { HomeComponent } from './pages/home/home.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from './pages/store/store.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    HomeComponent,
    PoliticasComponent,
    TerminosComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, StoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
