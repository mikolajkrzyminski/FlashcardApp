import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
      searchPhrase: ['', Validators.required],
      selectedSourceLang: [null, Validators.required],
      selectedTargetLang: [null, Validators.required]
    });

    this.setPageData();
  }

  dictionaryValidator() {
    if (!this.translationForm.get('selectedSourceLang')?.value.length) return null
    return this.directedDicts.includes({
      source_lang: this.translationForm.get('selectedSourceLang')?.value,
      target_lang: this.translationForm.get('selectedTargetLang')?.value
    }) ? null : { noDictionary: true };
  }

  async setPageData() {
    this.pageDataService.getPageData().subscribe(pageData => {
      console.log(pageData);
      this.directedDicts = pageData.directed_dicts as Dictionary[];
      this.languagesLabel = pageData.labels;
      this.setLangs();
    });
  }

  getLabel(language: string): string {
    return this.languagesLabel.find(element => element.lang === language)?.label ?? "";
  }

  //getLang(label: string): string {
  //  return this.languagesLabel.find(element => element.label === label)?.lang ?? "";
  //}

  getDictionaries(data: any[]): Dictionary[] {
    var resultDictsArray: Dictionary[] = [];
    for (let i = 0; i < data.length; i++) {
      resultDictsArray.push({
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
    this.translationForm.patchValue({ "selectedTargetLang": null });
  }

  setLangs(): void {
    this.setSrcLangs();
    this.setTrgLangs();
  }

  uniqueArray(a: string[]): string[] {
    return [...new Set(a)];
  }

  onSubmit(): void {

  }
}
