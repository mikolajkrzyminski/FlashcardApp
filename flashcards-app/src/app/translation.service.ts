import { EventEmitter, Injectable } from '@angular/core';
import { Translation } from './page-data';


export interface translationsData {
  sourceWord: string;
  targetWord: string;
  translations: Translation[],
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  dataUpdated: EventEmitter<translationsData> = new EventEmitter();

  setTranlations(sourceWord: string, targetWord: string, translations: Translation[]) {
    this.dataUpdated.emit({
      sourceWord: sourceWord,
      targetWord: targetWord,
      translations: translations,
    });
  }

  constructor() { }
}
