import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { Cidade } from './../models/cidade.model';


@Injectable()
export class CidadeService {
    private api: string;
    constructor(private http: Http, private httpService: HttpService) {
        this.api = httpService.getReclameTechApi() + 'cidade/';
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

    create(cidade: Cidade) {
        const header = this.httpService.getHeaders();
        return this.http.post(this.api, cidade, header)
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

    update(id: number, cidade: Cidade) {
        if (id && id > 0) {
          cidade.Id_Cidade = id;
            const header = this.httpService.getHeaders();
            return this.http.put(this.api + id, cidade, header)
                .pipe(map(res => {
                    return res;
                }));
        }
    }
}
