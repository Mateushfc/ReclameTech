import { Component, OnInit } from '@angular/core';

import { CidadeService } from 'src/app/services/cidade.service';
import { Cidade } from 'src/app/models/cidade.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CidadeListComponent implements OnInit {

  cidade = Cidade;

  constructor(
    private api: CidadeService   ) { }

  ngOnInit() {
    this.api.getAll().subscribe(res => {
      this.cidade = res;
    });  
  }
}