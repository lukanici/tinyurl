import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Domain } from '../models/Domain';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  url: string = 'http://localhost:3000/api/domains?from=';
  from: Date = new Date();

  constructor(private http: HttpClient) {
    this.from.setHours(this.from.getHours() - 24);
  }

  getDomains(): Observable<Domain[]> {
    return this.http.get<Domain[]>(`${this.url}${this.from.toISOString()}`, httpOptions);
  }
}
