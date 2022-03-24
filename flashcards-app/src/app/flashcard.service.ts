import { Injectable } from '@angular/core';
import { Dictionary } from './dictionary';
import { Flashcard } from './flashcard';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FlashcardService {
  serverUrl = "http://localhost:8000";


  constructor(private http: HttpClient) { }

  getFlashcards(): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(this.serverUrl + "/flashcards");
  }
}
