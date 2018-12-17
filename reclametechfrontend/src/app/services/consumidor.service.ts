import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { Consumidor } from './../models/consumidor.model';

@Injectable()
export class ConsumidorService {
    private api: string;
    constructor(private http: Http, private httpService: HttpService) {
        this.api = httpService.getReclameTechApi() + 'consumidor/';
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

    create(consumidor: Consumidor) {
        const header = this.httpService.getHeaders();
        return this.http.post(this.api, consumidor, header)
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

    update(id: number, consumidor: Consumidor) {
        if (id && id > 0) {
          consumidor.Id_consumidor = id;
            const header = this.httpService.getHeaders();
            return this.http.put(this.api + id, consumidor, header)
                .pipe(map(res => {
                    return res;
                }));
        }
    }
}
