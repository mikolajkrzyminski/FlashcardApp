import { Injectable } from '@angular/core';
import { DICTIONARIES } from './dictionaries-mock';
import { Dictionary } from './dictionary';
import { Flashcard } from './flashcard';
import { FLASHCARDS } from './mock-flashcards';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FlashcardService {

  constructor() { }

  getDicts(): Observable<Dictionary[]> {
    const dictionaries = of(DICTIONARIES);
    return dictionaries;
  }

  getFlashcards(): Observable<Flashcard[]> {
    const flashcards = of(FLASHCARDS);
    return flashcards;
  }
}
