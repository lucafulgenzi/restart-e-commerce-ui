import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatoService {

  private stato: boolean = false;

  getStato(): boolean {
    return this.stato;
  }

  setStato(newStato: boolean){
    this.stato = newStato;
  }

}
