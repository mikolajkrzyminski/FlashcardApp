import { Component, OnInit, ViewChild } from '@angular/core';
import { Dictionary } from '../dictionary';
import { FlashcardService } from '../flashcard.service';
import { FlashcardsComponent } from '../flashcards/flashcards.component';

@Component({
  selector: 'app-dictionaries',
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.css']
})
export class DictionariesComponent implements OnInit {
  opened: boolean = false;

  dictionaries: Dictionary[] = [];

  selectedDict?: Dictionary;

  @ViewChild(FlashcardsComponent)
  private flashcardsComp!: FlashcardsComponent;

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit(): void {
    this.setDictionaries();
  }

  handleNavStateChange(): void {
    this.opened = !this.opened;
  }

  selectDict(dictionary?: Dictionary): void {
    this.selectedDict = dictionary;
    this.flashcardsComp.setPresentedFlashcards(dictionary);
    if (this.opened) this.opened = false;
  }

  setDictionaries(): void {
    this.flashcardService.getDicts().subscribe(dicts => {
      this.dictionaries = dicts
    });
  }

}
