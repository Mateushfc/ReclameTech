import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { Estado } from './../models/estado.model';


@Injectable()
export class EstadoService {
    private api: string;
    constructor(private http: Http, private httpService: HttpService) {
        this.api = httpService.getReclameTechApi() + 'estado/';
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

    create(estado: Estado) {
        const header = this.httpService.getHeaders();
        return this.http.post(this.api, estado, header)
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

    update(id: number, estado: Estado) {
        if (id && id > 0) {
          estado.Id_estado = id;
            const header = this.httpService.getHeaders();
            return this.http.put(this.api + id, estado, header)
                .pipe(map(res => {
                    return res;
                }));
        }
    }
}
