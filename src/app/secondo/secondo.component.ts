import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { emit } from 'cluster';


@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {
testo: string='Iniziale';

  @Output
  myClick: EventEmitter<void>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

 clickEvent (ev: MouseEvent, param : number){
   if(param===2){
   this.testo='Default';
   this.myClick=emit();
  }
   console.log('ho cliccato il pulsante'+param);
   ev.stopPropagation();
 }
 inputEvent (ev){
   this.testo=ev.target.value;
 }
}
