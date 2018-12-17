import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.scss']
})
export class PerfilEmpresaComponent implements OnInit {

  private empresa: Empresa;

  constructor(private service: EmpresaService, private rota: ActivatedRoute) { }

  ngOnInit() {
    this.service.get(this.rota.snapshot.params["Id_empresa"]).subscribe(
      (data) => { this.empresa = data, console.log(data);
      });

  }

}
