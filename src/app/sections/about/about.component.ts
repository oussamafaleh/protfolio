import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from 'src/app/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as frensh } from './i18n/fr';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private translationLoader: FuseTranslationLoaderService) {
      this.translationLoader.loadTranslations(english, frensh);
     }

  ngOnInit() {
  }

}
