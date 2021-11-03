import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-kata22',
    templateUrl: './kata22.component.html',
    styleUrls: ['./kata22.component.css']
})
export class Kata22Component implements OnInit {

    // Kata 2-2 (Tiempo aproximado: 8 minutos):
    //      Generar un componente con un botón como variable de template.
    //      Acceder con @ViewChild al botón
    //      Crear un observable en base al click del botón (fromEvent) y mostrar el valor del evento
    //      Que solo muestre el valor de la propiedad “clientX”
    //      Extra: Experimentar con otros controles (select, checkbox, etc) y o eventos.
    //      Tecnologías: async, fromEvent, string interpolation.

    constructor() { }

    ngOnInit(): void {
    }

}
