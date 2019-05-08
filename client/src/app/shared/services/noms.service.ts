import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Nom, Message} from '../interfaces'
import {Observable} from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class NomsService {
    constructor(private http: HttpClient) {

    }

    fetch(): Observable<Nom[]> {
        return this.http.get<Nom[]>('api/noms')
    }

    getById(id: string): Observable<Nom> {
        return this.http.get<Nom>(`/api/noms/${id}`)
    }

    update(id: string, nom: Nom): Observable<Nom> {
        return this.http.patch<Nom>(`/api/noms/${id}`, nom)
    }

    create(nom: Nom): Observable<Nom> {
        return this.http.post<Nom>('/api/noms', nom)
    }

    delete(id: string): Observable<Message> {
        return this.http.delete<Message>(`/api/noms/${id}`)
    }
}