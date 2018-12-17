import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { Empresa } from './../models/empresa.model';


@Injectable()
export class EmpresaService {
    private api: string;
    constructor(private http: Http, private httpService: HttpService) {
        this.api = httpService.getReclameTechApi() + 'empresa/';
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

    create(empresa: Empresa) {
        const header = this.httpService.getHeaders();
        return this.http.post(this.api, empresa, header)
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

    update(id: number, empresa: Empresa) {
        if (id && id > 0) {
            empresa.Id_empresa = id;
            const header = this.httpService.getHeaders();
            return this.http.put(this.api + id, empresa, header)
                .pipe(map(res => {
                    return res;
                }));
        }
    }
}
