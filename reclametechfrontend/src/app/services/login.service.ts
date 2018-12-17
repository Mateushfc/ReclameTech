import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
const URL = 'http://localhost:64784/api/';
const tokem = 'usuario';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    logar(email, senha) {
        var login: Login = { email: email, senha: senha};

        return this.http.post(URL + 'logar', login);
    }

    salvaUsuario(usuario) {
        localStorage.setItem(tokem, JSON.stringify(usuario));
    }

    remove() {
        localStorage.removeItem(tokem);
    }

    buscaUsuarioLogado(){
        return localStorage.getItem(tokem);
    }

    taLogado(){
        return !!this.buscaUsuarioLogado();
    }
}

export class Login {
    email: string;
    senha: string;
}