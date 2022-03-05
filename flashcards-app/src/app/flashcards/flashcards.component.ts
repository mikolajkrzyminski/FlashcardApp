import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';
import { FLASHCARDS } from '../mock-flashcards';
import { Dictionary } from '../dictionary';
import { DICTIONARIES } from '../dictionaries-mock';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})

export class FlashcardsComponent implements OnInit {

  selectedDictionary?: Dictionary;
  dictionaries = DICTIONARIES;
  flashcards = FLASHCARDS;

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
}
