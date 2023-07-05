import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutasComponent } from './rutas/rutas.component';
import { RegistrarAsientosComponent } from './registrar-asientos/registrar-asientos.component';


const routes: Routes = [
 
  { path: 'rutas', component: RutasComponent },
  { path: 'registrar-asientos', component: RegistrarAsientosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
