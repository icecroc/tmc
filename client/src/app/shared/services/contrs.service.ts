import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Contr, Message} from '../interfaces'
import {Observable} from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class ContrsService {
    constructor(private http: HttpClient) {

    }

    fetch(): Observable<Contr[]> {
        return this.http.get<Contr[]>('api/contrs')
    }

    getById(id: string): Observable<Contr> {
        return this.http.get<Contr>(`/api/contrs/${id}`)
    }

    update(id: string, contr: Contr): Observable<Contr> {
        return this.http.patch<Contr>(`/api/contrs/${id}`, contr)
    }

    create(contr: Contr): Observable<Contr> {
        return this.http.post<Contr>('/api/contrs', contr)
    }

    delete(id: string): Observable<Message> {
        return this.http.delete<Message>(`/api/contrs/${id}`)
    }
}