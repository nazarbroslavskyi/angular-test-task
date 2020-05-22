import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private apiUrl: string;

  constructor(private api: ApiService) {}


  public fetchFilterItems<T>(url, queryParams): Observable<T> {
    return this.api.get<T>(url, queryParams);
  }

}
