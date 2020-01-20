import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  busqueda: string;
  @Output() busquedaFinal: EventEmitter<string>;

  constructor() {
    this.busquedaFinal = new EventEmitter();
   }

  ngOnInit() {
    
  }

  searchGame(){
    this.busquedaFinal.emit(this.busqueda);
  }

}
