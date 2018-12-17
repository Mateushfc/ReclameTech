import { Component, OnInit } from '@angular/core';

import { Consumidor } from './../../../models/consumidor.model';
import { ConsumidorService } from 'src/app/services/consumidor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ConsumidorListComponent implements OnInit {

  consumidor = Consumidor;

  constructor(
    private api: ConsumidorService   ) { }

  ngOnInit() {
    this.api.getAll().subscribe(res => {
      this.consumidor = res;
    });  
  }
}