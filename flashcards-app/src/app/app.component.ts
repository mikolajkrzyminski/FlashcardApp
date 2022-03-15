import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dictionary } from './dictionary';
import { Label } from './page-data';
import { PageDataService } from './page-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Flashcards app';

  directedDicts: Dictionary[] = [];
  languagesLabel: Label[] = [];

  translationForm: FormGroup;

  srcLangs: string[] = [];
  trgLangs: string[] = [];

  constructor(private pageDataService: PageDataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.translationForm = this.formBuilder.group({
      searchPhrase: [null, Validators.required],
      selectedSourceLang: [null, Validators.required],
      selectedTargetLang: [null, Validators.required]
    });

    this.setPageData();
  }

  async setPageData() {
    this.pageDataService.getPageData().subscribe(pageData => {
      console.log(pageData);
      this.directedDicts = this.getDictionaries(pageData.directed_dicts);
      this.languagesLabel = pageData.labels;
      this.setLangs();
    });
  }

  getLabel(language: string): string {
    return this.languagesLabel.find(element => element.lang === language)?.label ?? "";
  }

  getLang(label: string): string {
    return this.languagesLabel.find(element => element.label === label)?.lang ?? "";
  }

  getDictionaries(data: any[]): Dictionary[] {
    var resultDictsArray: Dictionary[] = [];
    for (let i = 0; i < data.length; i++) {
      resultDictsArray.push({
        id: i,
        source_lang: data[i].source_lang,
        target_lang: data[i].target_lang,
      });
    }
    return resultDictsArray;
  }

  setSrcLangs(): void {
    var resultLangs: string[] = [];
    this.directedDicts.forEach(dict => resultLangs.push(dict.source_lang));
    this.srcLangs = this.uniqueArray(resultLangs);
  }

  setTrgLangs(): void {
    var resultLangs: string[] = [];
    if (this.translationForm.get("selectedSourceLang")?.value) {
      this.directedDicts.forEach(dict => {
        if (dict.source_lang === this.translationForm.get("selectedSourceLang")?.value) resultLangs.push(dict.target_lang)
      });
    } else {
      this.directedDicts.forEach(dict => resultLangs.push(dict.target_lang));
    }
    this.trgLangs = this.uniqueArray(resultLangs);
    this.translationForm.invalid;
  }

  setLangs(): void {
    this.setSrcLangs();
    this.setTrgLangs();
  }

  uniqueArray(a: string[]): string[] {
    return [...new Set(a)];
  }

  onSubmit(): void {
    this.title = "submited!";
  }
}
