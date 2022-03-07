import { Component, OnInit, Input } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FLASHCARDS } from '../mock-flashcards';
import { Dictionary } from '../dictionary';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})

export class FlashcardsComponent implements OnInit {

  flashcards = FLASHCARDS;

  presentedFlashcards: Flashcard[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // changes isHidden flag on click event
  onClick(flashcard: Flashcard): void {
    flashcard.isHidden = !flashcard.isHidden;
  }

  // returns array of distinct dictionaries used in flashcards
  getUsedDictionaries(): Dictionary[] {
    return [...new Set(this.flashcards.map(dict => dict.dictionary))];
  }

  // returns all saved flashcards for given Dictionary
  setPresentedFlashcards(dictionary?: Dictionary): void {
    if (dictionary) {
      this.presentedFlashcards = this.flashcards.filter(function (flashcard) {
        console.log(flashcard.source);
        return dictionary === flashcard.dictionary;
      });
    } else {
      this.presentedFlashcards = this.flashcards;
    }
  }
}
