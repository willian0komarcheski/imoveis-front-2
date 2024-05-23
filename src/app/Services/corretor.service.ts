import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Corretor } from '../Models/corretor';

@Injectable({
  providedIn: 'root'
})
export class CorretorService {

  private apiUrl = `${environment.ApiUrl}corretores`;
  constructor(private http : HttpClient) {}
  

  GetCorretor() : Observable<Corretor[]> {
    return this.http.get<Corretor[]>(this.apiUrl);
  }

  GetCorretorid(id : number) : Observable<Corretor> {
    return this.http.get<Corretor>(`${this.apiUrl}/${id}`);
  }

  CreateCorretor(Corretor : Corretor) : Observable<Corretor[]> {
    return this.http.post<Corretor[]>(`${this.apiUrl}`, Corretor);
  }

  DeleteCorretor(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url.replace(/\s/g, ""));
  }

  EditCorretor(corretor: Corretor, id : number): Observable<Corretor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Corretor>(url, corretor);
  } 
}

