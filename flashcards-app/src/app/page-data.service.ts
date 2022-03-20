import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageData, Translation } from './page-data';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

export interface TranslationResponse {
  results: Translation[];
  source_lang: string;
  target_lang: string;
}

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  serverUrl = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  getPageData(): Observable<PageData> {
    return this.http.get<PageData>(this.serverUrl + "/dictionaryData", httpOptions);
  }

  getTranslation(searchPhrase: string, sourceLanguage: string, targetLanguage: string): Observable<TranslationResponse> {
    const params = new HttpParams()
      .set('phrase', searchPhrase)
      .set('source_language', sourceLanguage)
      .set('target_language', targetLanguage)
    return this.http.get<TranslationResponse>(this.serverUrl + "/search", { params });
  }
}
