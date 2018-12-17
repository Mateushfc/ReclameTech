import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class EmpresaListComponent implements OnInit {

  empresa = Empresa;
  lstgambis: any;
  constructor(
    private api: EmpresaService,
    private title: Title) {
    this.title.setTitle('Lista de empresas');
  }

  ngOnInit() {
    this.api.getAll().subscribe(res => {
      this.empresa = res;
    });
  }

  pesquisar(){
   
  }
}