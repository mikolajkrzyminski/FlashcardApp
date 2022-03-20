import { Component, OnInit, Input } from '@angular/core';
import { Flashcard } from '../flashcard';
import { Dictionary } from '../dictionary';
import { FlashcardService } from '../flashcard.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})

export class FlashcardsComponent implements OnInit {

  flashcards: Flashcard[] = [];

  presentedFlashcards: Flashcard[] = [];

  dictionaries: Dictionary[] = [];

  selectedDict?: Dictionary;

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit(): void {
    this.setFlashcards();
  }

  // changes isHidden flag on click event
  onClick(flashcard: Flashcard): void {
    flashcard.isHidden = !flashcard.isHidden;
  }

  // returns array of distinct dictionaries used in flashcards
  getUsedDictionaries(): Dictionary[] {
    var dicts: Dictionary[] = [];
    this.flashcards.forEach(elem => {
      dicts.push(
        {
          sourceLang: elem.sourceLang,
          targetLang: elem.targetLang
        })
    });
    return _.uniqWith(dicts, _.isEqual);
  }

  // returns all saved flashcards for given Dictionary
  setPresentedFlashcards(): void {
    if (this.selectedDict) {
      this.presentedFlashcards = this.flashcards.filter((flashcard) => {
        return this.selectedDict!.sourceLang === flashcard.sourceLang &&
          this.selectedDict!.targetLang === flashcard.targetLang;
      });
    } else {
      this.presentedFlashcards = this.flashcards;
    }
  }

  setFlashcards(): void {
    this.flashcardService.getFlashcards().subscribe(flashcards => {
      this.flashcards = flashcards
      this.setDictionaries();
    });
  }

  selectDict(dictionary?: Dictionary): void {
    this.selectedDict = dictionary;
    this.setPresentedFlashcards();
  }

  setDictionaries(): void {
    this.dictionaries = this.getUsedDictionaries();
  }
}
