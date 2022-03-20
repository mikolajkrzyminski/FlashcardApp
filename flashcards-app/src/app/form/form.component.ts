import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dictionary } from '../dictionary';
import { Label } from '../page-data';
import { PageDataService } from '../page-data.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  directedDicts: Dictionary[] = [];
  languagesLabel: Label[] = [];

  translationForm: FormGroup;

  srcLangs: string[] = [];
  trgLangs: string[] = [];

  constructor(private pageDataService: PageDataService, private formBuilder: FormBuilder, private dataService: TranslationService) { }

  ngOnInit(): void {
    this.translationForm = this.formBuilder.group({
      searchPhrase: ['', Validators.required],
      selectedSourceLang: [null, Validators.required],
      selectedTargetLang: [null, Validators.required]
    });

    this.setPageData();
  }

  async setPageData() {
    this.pageDataService.getPageData().subscribe(pageData => {
      this.directedDicts = pageData.directed_dicts;
      this.languagesLabel = pageData.labels;
      this.setLangs();
    });
  }

  getLabel(language: string): string {
    return this.languagesLabel.find(element => element.lang === language)?.label ?? "";
  }

  getDictionaries(data: any[]): Dictionary[] {
    var resultDictsArray: Dictionary[] = [];
    for (let i = 0; i < data.length; i++) {
      resultDictsArray.push({
        sourceLang: data[i].source_lang,
        targetLang: data[i].target_lang,
      });
    }
    return resultDictsArray;
  }

  setSrcLangs(): void {
    var resultLangs: string[] = [];
    this.directedDicts.forEach(dict => resultLangs.push(dict.sourceLang));
    this.srcLangs = this.uniqueArray(resultLangs);
  }

  setTrgLangs(): void {
    var resultLangs: string[] = [];
    if (this.translationForm.get("selectedSourceLang")?.value) {
      this.directedDicts.forEach(dict => {
        if (dict.sourceLang === this.translationForm.get("selectedSourceLang")?.value) resultLangs.push(dict.targetLang)
      });
    } else {
      this.directedDicts.forEach(dict => resultLangs.push(dict.targetLang));
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
    this.pageDataService.getTranslation(
      this.translationForm.get('searchPhrase')?.value,
      this.translationForm.get('selectedSourceLang')?.value,
      this.translationForm.get('selectedTargetLang')?.value).subscribe(translations => {
        this.dataService.setTranlations(translations["source_lang"], translations["target_lang"], translations['results'])
      });
  }

}
