import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-sotto-componente',
  template: `
    <button (click)="incrementa()" >Incrementa</button>
    <button (click)="decrementa()">Decrementa</button>
  `,
  styles: [``]
})
export class SottoComponenteComponent {

  @Input() inputContatore: number = 0;

  @Output() contatoreCambiato: EventEmitter<number> = new EventEmitter<number>();

  incrementa(): void {
    this.contatoreCambiato.emit(this.inputContatore += 1);
  }

  decrementa(): void {
    this.contatoreCambiato.emit(this.inputContatore -= 1);
  }

  // constructor() {
  //   console.log('Constructor');
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log("[RESTART] Current Value: ",changes['inputContatore'].currentValue)
    console.log("[RESTART] First Change: ",changes['inputContatore'].firstChange)
    console.log("[RESTART] Previous Value: ",changes['inputContatore'].previousValue)
  }
  //
  // ngOnInit() {
  //   console.log('ngOnInit');
  // }
  //
  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }
  //
  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }
  //
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }
  //
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }
  //
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }
  //
  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  // }


}
