import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PageData } from './page-data';
import { PAGEDATA } from './page-data-mock';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  constructor() { }

  getPageData(): Observable<PageData> {
    const pageData = of(PAGEDATA);
    return pageData;
  }
}
