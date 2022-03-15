import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PageData } from './page-data';
import { PAGEDATA } from './page-data-mock';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  serverUrl = "http://localhost:8000/dictionaryData";

  constructor(private http: HttpClient) { }

  getPageData(): Observable<PageData> {
    return this.http.get<PageData>(this.serverUrl, httpOptions);
  }
}
