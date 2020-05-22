import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // this.apiUrl = environment.backendUrl;
    this.apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
  }

  public get<T = unknown>(endpoint: string, params: HttpRequest<{}> | {} = {}): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, { params: (params as any) });
  }
}
