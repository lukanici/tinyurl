import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  url: string = 'http://localhost:3000/api/urls';

  constructor(private http: HttpClient) { }

  shortenUrl(originalUrl: string): Observable<any> {
    return this.http.post(this.url, { originalUrl }, httpOptions);
  }
}
