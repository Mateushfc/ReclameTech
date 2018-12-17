import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CidadeService } from 'src/app/services/cidade.service';
import { Cidade } from 'src/app/models/cidade.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class CidadeRegisterComponent implements OnInit {

  public cidade: Cidade;
  errorMsg: string;
  successMsg: string;
  formErrorMsg: string;

  constructor(
    private api: CidadeService,
    private router: Router) {
    this.formErrorMsg = "Preencha os campos obrigatórios.";
    this.successMsg = "Cadastro realizado com sucesso.";
    this.errorMsg = "Erro ao cadastrar, tente novamente!";
    this.cidade = new Cidade();
  }

  save() {
    this.api.create(this.cidade).subscribe(res => {
      if (res.status === 200) {
        this.cleanForm();
        this.showSuccess(this.successMsg);
        this.router.navigate(['cidade']);
      } else {
        this.showError(this.errorMsg);
      }
    })
  }

  cleanForm() {
    this.cidade.nomeCidade = "";
    this.cidade.cep = "";
    this.cidade.fk_Estado = 0;
  }

  validateForm() {
    if (!this.cidade.nomeCidade || !this.cidade.cep|| !this.cidade.fk_Estado) {
      this.showWarning(this.formErrorMsg);
    } else {
      this.save();
    }
  }

  showSuccess(msg: string) {
    this.successMsg;
  }

  showWarning(msg: string) {
    this.formErrorMsg;
  }

  showError(msg: string) {
    this.errorMsg;
  }


  ngOnInit() {
  }

}
