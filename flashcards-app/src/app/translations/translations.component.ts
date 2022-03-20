import { Component, OnInit, Input } from '@angular/core';
import { Translation } from '../page-data';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.css']
})
export class TranslationsComponent implements OnInit {

  translations: Translation[] = [];

  sourceWord: string;
  targetWord: string;

  constructor(private dataService: TranslationService) { }

  ngOnInit(): void {
    this.dataService.dataUpdated.subscribe((data) => {
      console.log(data);
      this.translations = data["translations"];
      this.sourceWord = data["sourceWord"];
      this.targetWord = data["targetWord"];
    });
  }
}
