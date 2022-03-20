import { Injectable } from '@angular/core';
import { Dictionary } from './dictionary';
import { Flashcard } from './flashcard';
import { FLASHCARDS } from './mock-flashcards';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FlashcardService {

  constructor() { }

  getFlashcards(): Observable<Flashcard[]> {
    const flashcards = of(FLASHCARDS);
    return flashcards;
  }
}
