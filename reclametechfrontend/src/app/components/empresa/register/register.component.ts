import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class EmpresaRegisterComponent implements OnInit {

  public empresa: Empresa;
  formPJ: FormGroup;
  submitted = false;

  constructor(
    private api: EmpresaService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private title: Title) {
    this.empresa = new Empresa();
    this.title.setTitle('Registrar PJ');
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formPJ = this._formBuilder.group({
      'nomeUsuario': [null, [Validators.required, Validators.maxLength(50)]],
      'cnpj': [null, [Validators.required, Validators.maxLength(14)]],
      'enderecoPJ': [null, [Validators.required]],
      'telefonePJ': [null, [Validators.required]],
      'fk_areaEmpresa': [null, [Validators.required]],
      'emailPJ': [null, [Validators.required, Validators.email]],
      'senhaPJ': [null, [Validators.required, Validators.minLength(6), Validators.maxLength(14)]]
    });
  }

  get f() { return this.formPJ.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formPJ.invalid) {
      return;
    }

    alert('Empresa cadastrada com sucesso!')
  }

  save() {
    this.api.create(this.empresa).subscribe(res => {
      if (res.status === 200) {
        debugger;
        this.cleanForm();
        this.router.navigate(['/login']);
      } else {
      }
    })
  }

  cleanForm() {
    this.formPJ.reset();

  }

    validateForm() {
      if (!this.empresa.nomeUsuario || !this.empresa.emailPJ|| !this.empresa.senhaPJ) {
        return null
      } else {
        this.save();
      }
    }



}

