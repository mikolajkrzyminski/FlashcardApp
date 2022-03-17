import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageData } from './page-data';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  serverUrl = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  getPageData(): Observable<PageData> {
    return this.http.get<PageData>(this.serverUrl + "/dictionaryData", httpOptions);
  }

  getTranslation(searchPhrase: string, sourceLanguage: string, targetLanguage: string): Observable<any[]> {
    const params = new HttpParams()
      .set('phrase', searchPhrase)
      .set('source_language', sourceLanguage)
      .set('target_language', targetLanguage)
    return this.http.get<any[]>(this.serverUrl + "/search", { params })
  }
}
