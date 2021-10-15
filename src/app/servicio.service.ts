import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { 
    this.CargarProductos();
  }
  manzanas: any[] = [];

  private CargarProductos() {
    this.http.get('http://localhost:3000/productosManzanas')
    .subscribe( (resp: any ) => {
         this.manzanas = resp;
         console.log(this.manzanas);
    });
  }

}
/*
export class ServicioInsertService{

  constructor(private http: HttpClient) { 
    this.InsertarUsuario();
  }
  usuario: any[] = [];

  private InsertarUsuario() {
    this.http.get('http://localhost:3000/adduser')
    .subscribe( (resp: any ) => {
         this.usuario = resp;
         console.log(this.usuario);
    });
  }
}*/
