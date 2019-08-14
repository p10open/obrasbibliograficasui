import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObraBibliografica } from '../models/obraBibliografica';
import { RespostaProcessamento } from '../models/respostaProcessamento';
import { catchError, map, tap} from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable()
export class NomeService {

    private obrasBibliograficasUrl = 'https://localhost:44387/api/ObraBibliografica/processar';
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
        ) { }

    processarNomes(obrasBiblioGraficas: ObraBibliografica[]): Observable<RespostaProcessamento> {
        return this.http.post<RespostaProcessamento>(this.obrasBibliograficasUrl, obrasBiblioGraficas, this.httpOptions)
    }
}