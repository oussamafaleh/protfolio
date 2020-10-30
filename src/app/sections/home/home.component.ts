import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from 'src/app/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as frensh } from './i18n/fr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private translationLoader: FuseTranslationLoaderService,) {
      this.translationLoader.loadTranslations(english, frensh);
     }

  ngOnInit() {
  }
  scrollToElement(): void {
    window.scrollTo(0,2900)
}
}
