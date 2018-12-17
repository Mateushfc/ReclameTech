import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/models/empresa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ReclamacaoListComponent implements OnInit {

  empresa = Empresa;
  lstgambis: any;
  constructor(
    private api: EmpresaService,
    private title: Title, private rota: ActivatedRoute) {
    this.title.setTitle('Lista de empresas');
    }
  ngOnInit() {
    this.api.getAll().subscribe(res => {
      this.empresa = res;
    });

    this.api.get(this.rota.snapshot.params["Id_empresa"]).subscribe(
      (data) => { this.empresa = data ,console.log(data);
      }
    );
  }

}
