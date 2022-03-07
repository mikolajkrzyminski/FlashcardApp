import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DICTIONARIES } from './dictionaries-mock';
import { Dictionary } from './dictionary';
import { FlashcardsComponent } from './flashcards/flashcards.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Flashcards app';
  opened: boolean = false;

  dictionaries = DICTIONARIES;
  selectedDict?: Dictionary;

  usedDictionaries: Dictionary[] = [];

  @ViewChild(FlashcardsComponent)
  private flashcardsComp!: FlashcardsComponent;

  ngAfterViewInit() {
    this.flashcardsComp.setPresentedFlashcards(this.selectedDict);
  }

  handleNavStateChange(): void {
    this.opened = !this.opened;
  }

  selectDict(dictionary?: Dictionary): void {
    this.selectedDict = dictionary;
    this.flashcardsComp.setPresentedFlashcards(dictionary);
    if (this.opened) this.opened = false;
  }
}
