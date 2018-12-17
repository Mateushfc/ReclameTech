import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ConsumidorService } from 'src/app/services/consumidor.service';
import { Consumidor } from 'src/app/models/consumidor.model';
import { CidadeService } from 'src/app/services/cidade.service';
import { Cidade } from 'src/app/models/cidade.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class ConsumidorRegisterComponent implements OnInit {

  public consumidor: Consumidor;
  public cidades: Cidade[]=[];
  errorMsg: string;
  successMsg: string;
  formErrorMsg: string;
  formPF: FormGroup;
  submitted = false;

  constructor(
    private apiConsumidor: ConsumidorService,
    private apiCidade: CidadeService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private title: Title) {
    this.title.setTitle('Registrar PF');
    this.consumidor = new Consumidor(); 

  }

  ngOnInit() {
    this.buildForm();
    this.loadCidades();
  }

  loadCidades() {
    this.apiCidade.getAll().subscribe(fk_cidade => {
      this.cidades = fk_cidade;
      console.log(fk_cidade);
      
    });
  }

  private buildForm() {
    this.formPF = this._formBuilder.group({
      'nomeConsumidor': [null, [Validators.required, Validators.maxLength(50)]],
      'cpf': [null, [Validators.required, Validators.maxLength(11)]],
      'telefoneConsumidor': [null, [Validators.required]],
      'fk_cidade': [null, [Validators.required]],
      'emailConsumidor': [null, [Validators.required, Validators.email]],
      'senhaConsumidor': [null, [Validators.required, Validators.minLength(6), Validators.maxLength(14)]]
    });
  }

  get f() { return this.formPF.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formPF.invalid) {
      return;
    }

    alert('Consumidor cadastrado com sucesso!')
  }

  save() {
    this.apiConsumidor.create(this.consumidor).subscribe(res => {
      if (res.status === 200) {
        this.cleanForm(),
        this.router.navigate(["/login"])
      }
    })
  }

  cleanForm() {
    this.formPF.reset();
  }

  validateForm() {
   
    console.log(this.consumidor);
    
     if (!this.consumidor.nomeConsumidor || !this.consumidor.cpf || !this.consumidor.senhaConsumidor) {
      return null;
    } else {
      this.save();
    } 
  }
}