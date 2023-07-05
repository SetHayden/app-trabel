import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RutasComponent } from './rutas/rutas.component';
import { RegistrarAsientosComponent } from './registrar-asientos/registrar-asientos.component';

@NgModule({
  declarations: [
    AppComponent,
    RutasComponent,
    RegistrarAsientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
