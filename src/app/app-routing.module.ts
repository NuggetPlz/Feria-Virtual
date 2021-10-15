import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login';
import { LoginMenuComponent } from './loginMenu';
import { RegistroMenuComponent } from './registroMenu';
import { ProductosMenuComponent } from './productosMenu';
import { FrutasMenuComponent } from './frutasMenu';
import { VentaManzanasComponent } from './ventaManzanas';
import { InicioComponent } from './inicio';
import { RegistroComponent } from './registro';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'loginMenu', component: LoginMenuComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'productosMenu', component: ProductosMenuComponent },
  { path: 'frutasMenu', component: FrutasMenuComponent },
  { path: 'ventaManzanas', component: VentaManzanasComponent },
  { path: 'registroMenu', component: RegistroMenuComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
