import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

<!--    <div *ngIf="condizione">Il contenuto si visualizza se la condizione è true</div>-->

<!--    <div *ngIf="autenticato">Sei autenticato</div>-->
<!--    <div *ngIf="!autenticato">Non sei autenticato</div>-->

<!--    <button (click)="cambiaStato()">Cambia Stato</button>-->

<!--    <div *ngIf="autenticato; else elseBlock">Benvenuto Luca</div>-->
<!--    <ng-template #elseBlock>-->
<!--      <div>Per favore accedi</div>-->
<!--    </ng-template>-->

<!--    <ul>-->
<!--      <li *ngFor="let nome of nomi; index as i; first as f; odd as o">-->
<!--        {{i + 1}}. {{ nome }} <span *ngIf="o">è pari</span>-->
<!--      </li>-->
<!--    </ul>-->

    <div [ngSwitch]="statoOrdine">
      <div *ngSwitchCase="'attesa'">Il tuo ordine è in attesa</div>
      <div *ngSwitchCase="'spedito'">Il tuo ordine è in stato spedito</div>
      <div *ngSwitchCase="'inConsegna'">Il tuo ordine è in consegna</div>
      <div *ngSwitchCase="'consegnato'">Il tuo ordine è consegnato</div>
      <div *ngSwitchDefault>Lo stato del tuo ordine è sconosciuto</div>
    </div>



  `,
  styles: [``]
})
export class AppComponent {

  // nomi: string[] = ['Luca', 'Fabio', 'Giuseppe', 'Marco', 'Filippo']

  // condizione: boolean = false;
  // autenticato: boolean = false;

  statoOrdine: string = 'ciao'

  constructor() {}

  // cambiaStato() {
  //   this.autenticato = !this.autenticato;
  // }
}
