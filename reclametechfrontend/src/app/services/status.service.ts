import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { Status } from './../models/status.model';


@Injectable()
export class StatusService {
    private api: string;
    constructor(private http: Http, private httpService: HttpService) {
        this.api = httpService.getReclameTechApi() + 'status/';
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

    create(status: Status) {
        const header = this.httpService.getHeaders();
        return this.http.post(this.api, status, header)
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

    update(id: number, status: Status) {
        if (id && id > 0) {
          status.Id_status = id;
            const header = this.httpService.getHeaders();
            return this.http.put(this.api + id, status, header)
                .pipe(map(res => {
                    return res;
                }));
        }
    }
}
