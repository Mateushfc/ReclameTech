import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';
import { Title } from '../../../node_modules/@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})

export class LoginComponent implements OnInit {

    formLogin: FormGroup;
    submitted = false;

    constructor(
        private tokem: LoginService,
        public router: Router,
        private service: LoginService,
        private _formBuilder: FormBuilder,
        private title: Title) {
        this.title.setTitle('Login');
    }

    ngOnInit() {
        this.buildForm();
    }

    private buildForm() {
        this.formLogin = this._formBuilder.group({
            'nameLogin': [null, [Validators.required, Validators.email]],
            'passwordLogin': [null, [Validators.required, Validators.minLength(6), Validators.maxLength(14)]]
        });
    }

    get f() { return this.formLogin.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formLogin.invalid) {
            return;
        }

        alert('Usuario logado com sucesso!')
    }

    login(nameLogin: any, passwordLogin: any) {
        debugger;
        this.service.logar(nameLogin, passwordLogin).subscribe(
            (data) => {this.tokem.salvaUsuario(data),console.log(data),alert('Usuario logado com sucesso!'), this.router.navigate(["/home"])},
            (err: HttpErrorResponse) => alert(err.error.Message)
        )
    }



    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

}
