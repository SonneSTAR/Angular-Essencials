import { Component } from '@angular/core'


@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>

    <h3><strong>La base es {{base}}</strong></h3>

    <span>{{numero}}</span>
    <button (click)="acumular(base)"> +{{base}} </button>
    <button (click)="acumular(-base)"> -{{base}} </button>
    `
  })

export class ContadorComponent {
    title: string = 'Contador App';
  
    numero: number = 10;

    base: number = 5;

    acumular(valor:number): number{
        return this.numero += valor;
    } 
}