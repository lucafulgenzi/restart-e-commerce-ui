import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Il valore del contatore è {{ contatore }}</h1>

    <button (click)="modificaInput()">Modifica Input</button>

    <app-sotto-componente [inputContatore]="contatore"
                          (contatoreCambiato)="contatoreCambiatoEventHandler($event)" >
    </app-sotto-componente>
  `,
  styles: [``]
})
export class AppComponent {

  contatore: number = 0;

  contatoreCambiatoEventHandler(nuovoContatore: number) {
    this.contatore = nuovoContatore;
  }

  modificaInput() {
    this.contatore += 1;
  }
}
