import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable ({
    providedIn: 'root'
})
 
export class AutenticacaoService {
    private token: string | null = null;

    constructor(private http: HttpClient) { }

    login(nome: string): Observable<string> {
        return this.http.post('http://localhost:5109/login/auth', { nome }, { responseType: 'text'});
    }
        salvarToken(token: string): void {
            this.token = token;
            localStorage.setItem('token', token);
        
    }
}