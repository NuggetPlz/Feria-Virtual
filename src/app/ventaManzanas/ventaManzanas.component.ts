import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({ 
    selector: 'app-interfaz',
    templateUrl: 'ventaManzanas.component.html' })

export class VentaManzanasComponent {

    constructor(public servicio: ServicioService) { }

    ngOnInit(){
        
    }
}