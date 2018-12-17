import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { AreaEmpresa } from './../models/area-empresa.model';


@Injectable()
export class AreaEmpresaService {
    private api: string;
    constructor(private http: Http, private httpService: HttpService) {
        this.api = httpService.getReclameTechApi() + 'AreaEmpresa/';
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

    create(areaEmpresa: AreaEmpresa) {
        const header = this.httpService.getHeaders();
        return this.http.post(this.api, areaEmpresa, header)
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

    update(id: number, areaEmpresa: AreaEmpresa) {
        if (id && id > 0) {
          areaEmpresa.Id_area = id;
            const header = this.httpService.getHeaders();
            return this.http.put(this.api + id, areaEmpresa, header)
                .pipe(map(res => {
                    return res;
                }));
        }
    }
}
