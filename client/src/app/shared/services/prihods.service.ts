import {HttpClient, HttpParams} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Prihod} from '../interfaces'
import {Observable} from 'rxjs'
import {MaterialService} from '../classes/material.service'

@Injectable({
    providedIn: 'root'
})

export class PrihodsService {
    constructor(private http: HttpClient) {        
    }

    create(prihod: Prihod): Observable<Prihod> {
        return this.http.post<Prihod>('/api/prihod', prihod)
    }

    fetch(params: any = {}): Observable<Prihod[]> {
        return this.http.get<Prihod[]>('/api/prihod', {
            params: new HttpParams({
                fromObject: params
            })
        })
    }
}