import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { LoginMenuComponent } from './loginMenu';
import { RegistroMenuComponent } from './registroMenu';
import { ProductosMenuComponent } from './productosMenu';
import { FrutasMenuComponent } from './frutasMenu';
import { VentaManzanasComponent } from './ventaManzanas';
import { InicioComponent } from './inicio';
import { RegistroComponent } from './registro';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    LoginMenuComponent,
    ProductosMenuComponent,
    FrutasMenuComponent,
    VentaManzanasComponent,
    RegistroMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCarouselModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
