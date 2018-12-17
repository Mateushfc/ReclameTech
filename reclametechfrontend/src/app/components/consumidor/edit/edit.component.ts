import { ConsumidorService } from './../../../services/consumidor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Consumidor } from 'src/app/models/consumidor.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ConsumidorEditComponent implements OnInit {

  public consumidor: Consumidor;
  id: number;
  errorMsg: string;
  successMsg: string;
  formErrorMsg: string;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ConsumidorService
    
  ) {
    this.formErrorMsg = "Preencha os campos obrigatórios.";
    this.successMsg = "Cadastro atualizado.";
    this.errorMsg = "Erro ao atualizar, tente novamente!";
    this.id = route.snapshot.params['id'];
    this.consumidor = new Consumidor();
  }

  ngOnInit() {
    this.api.get(this.id).subscribe(res => {
      this.consumidor = res;     
    });
  }
  update() {
    this.api.update(this.id, this.consumidor).subscribe(res => {
      if (res.status === 200) {
        this.showSuccess(this.successMsg);
        this.router.navigate(['consumidor']);
      } else {
        this.showError(this.errorMsg);
      }
    });
  }

  validateForm() {
    if (!this.consumidor.nomeConsumidor || !this.consumidor.senhaConsumidor) {      
      this.showWarning(this.formErrorMsg);
    } else {
      debugger;
      this.consumidor.cpf = this.consumidor.cpf.replace(".","-");
      this.update();
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
}
