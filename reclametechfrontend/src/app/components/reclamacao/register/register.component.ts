import { LoginService } from './../../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { ReclamacaoService } from 'src/app/services/reclamacao.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Reclamacao } from 'src/app/models/reclamacao.model';
import { Empresa } from 'src/app/models/empresa.model';
import { Comentario } from 'src/app/models/comentario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class ReclamacaoRegisterComponent implements OnInit {

  public reclamacao: Reclamacao;
  public empresas: Empresa;
  public empresa: Empresa;
  private idEmpresa = "";
  resposta: string = '';

  formReclamacao: FormGroup;
  submitted = false;

  constructor(
    private apiReclamacao: ReclamacaoService,
    private apiEmpresa: EmpresaService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private usuarioLogado: LoginService,
    private rota: ActivatedRoute,
    private title: Title) {
    this.title.setTitle('Reclamar');
    this.reclamacao = new Reclamacao();


  }


  ngOnInit() {
    this.idEmpresa = this.rota.snapshot.params["Id_empresa"]

    this.buildForm();
    this.loadEmpresas();
    this.GetEmpresa();
  }

  loadEmpresas() {
    this.apiEmpresa.getAll().subscribe(fk_empresa => {
      this.empresas = fk_empresa;
      console.log(this.empresas);

    },
    );
  }

  private buildForm() {
    this.formReclamacao = this._formBuilder.group({
      "produtoEmpresa": ["", [Validators.required]],
      "tituloReclamacao": [null, [Validators.required]],
      "prestadorServico": ["", [Validators.maxLength(50)]],
      "fk_consumidor": ["", [Validators.required]],
      "comentario": ["", [Validators.required]],
      "fk_status": ["", [Validators.required]],
      "fk_empresa": ["", [Validators.required]],
    });
  }
  private GetEmpresa() {
    this.apiEmpresa.get(this.rota.snapshot.params["Id_empresa"]).subscribe((data) => {
    this.empresa = data, console.log(data);
    });
  }
  get f() { return this.formReclamacao.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.formReclamacao.invalid) {
      return;
    }

    alert('Reclamação realizada com sucesso!')
  }

  save() {
    this.apiReclamacao.create(this.reclamacao).subscribe(res => {
      if (res.status === 204) {
        alert('Reclamação realizada com sucesso!');
        this.router.navigate(["reclamacao/reposta, Id_reclamacao"]);

      }
    })
  }

  cleanForm() {
    this.formReclamacao.reset();
  }

  validateForm() {

    if (!this.reclamacao.tituloReclamacao || !this.reclamacao.produtoEmpresa) {
      return null;
    } else {
      var comentario = new Comentario()

      this.reclamacao.fk_empresa = 1;
      comentario.comentario = this.resposta;
      this.reclamacao.tb_Comentario = comentario;
      this.reclamacao.fk_empresa = parseInt(this.idEmpresa);
      var usuario = JSON.parse(this.usuarioLogado.buscaUsuarioLogado())
      this.reclamacao.fk_consumidor = usuario.Id;
      this.reclamacao.fk_status = 1;


      this.save();
    }
  }
}