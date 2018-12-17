import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { Comentario } from './../models/comentario.model';

@Injectable()
export class ComentarioService {
    private api: string;
    constructor(private http: Http, private httpService: HttpService) {
        this.api = httpService.getReclameTechApi() + 'comentario/';
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

    create(comentario: Comentario) {
        const header = this.httpService.getHeaders();
        return this.http.post(this.api, comentario, header)
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

    update(id: number, comentario: Comentario) {
        if (id && id > 0) {
          comentario.Id_comentario = id;
            const header = this.httpService.getHeaders();
            return this.http.put(this.api + id, comentario, header)
                .pipe(map(res => {
                    return res;
                }));
        }
    }
}