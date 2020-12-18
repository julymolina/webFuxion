import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

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

import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { AnonymousInitializerFactory, AnonymousInitializer } from './providers/anonymous.initializer';
import { VitaComponent } from './pages/vita/vita.component';
import { PrunexComponent } from './pages/prunex/prunex.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    HomeComponent,
    PoliticasComponent,
    TerminosComponent,
    FooterComponent,
    HeaderComponent,
    VitaComponent,
    PrunexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule,
  ],
  providers: [AnonymousInitializer,

    {
      provide: APP_INITIALIZER,
      useFactory: AnonymousInitializerFactory,
      deps: [AnonymousInitializer],
      multi: true,
    },],
  bootstrap: [AppComponent],
})
export class AppModule {}
