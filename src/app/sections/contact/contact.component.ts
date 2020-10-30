import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from 'src/app/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as frensh } from './i18n/fr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private translationLoader: FuseTranslationLoaderService) {
      this.translationLoader.loadTranslations(english, frensh);
     }

  ngOnInit() {
  }

}
