import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { DictionariesComponent } from './dictionaries/dictionaries.component';

const material = [
  MatSidenavModule,
  MatListModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    AppComponent,
    FlashcardsComponent,
    DictionariesComponent
  ],
  imports: [
    material,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
