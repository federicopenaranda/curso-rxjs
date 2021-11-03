import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-kata23',
    templateUrl: './kata23.component.html',
    styleUrls: ['./kata23.component.css']
})
export class Kata23Component implements OnInit {

    // Kata 2-3 (Tiempo aproximado: 8 minutos):
    //     Generar un componente y crear dos observables, uno con timer y otro con interval.
    //     Mostrar el valor de timer en el template con async pipe.
    //     Mostrar el valor de interval en el template sin async pipe, sino asignando el valor del observable a una propiedad del componente.
    //     Guardar la suscripción del observable con interval en una propiedad del componente.
    //     Añadir un método en la clase del componente y realizar el unsubscribe del observable con interval.
    //     Extra: Experimentar asignando el valor del observable con interval con async pipe, que es lo que sucede?.
    //     Tecnologías: ngFor, async, Observables, fromEvent, servicios, string interpolation, httpClient.

    constructor() { }

    ngOnInit(): void {
    }

}
