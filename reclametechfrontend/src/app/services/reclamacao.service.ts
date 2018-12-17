import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { Reclamacao } from './../models/reclamacao.model';

@Injectable()
export class ReclamacaoService {
    private api: string;
    constructor(private http: Http, private httpService: HttpService) {
        this.api = httpService.getReclameTechApi() + 'reclamacao/';
    }

    get(id: number) {
        if (id && id > 0) {
            return this.http.get(this.api + id)
                .pipe(map(res => {
                    return res.json();
                }));
        }
    }

    getAll() {
        return this.http.get(this.api)
            .pipe(map(res => {
                return res.json();
            }));
    }   

    create(reclamacao: Reclamacao) {
        const header = this.httpService.getHeaders();
       console.log(reclamacao);
       
        return this.http.post(this.api, reclamacao, header)
            .pipe(map(res => {
                return res;
            }));
    }

    delete(id: number) {
        return this.http.delete(this.api + id)
            .pipe(map(res => {
                return res;
            }));
    }

    update(id: number, reclamacao: Reclamacao) {
        if (id && id > 0) {
          reclamacao.Id_reclamacao = id;
            const header = this.httpService.getHeaders();
            return this.http.put(this.api + id, reclamacao, header)
                .pipe(map(res => {
                    return res;
                }));
        }
    }
}
