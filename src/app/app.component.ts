import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  selectedLanguage: any;
  languages:
    {
      id:String ,
      title :String ,
      flag:Object 
  }[];
  constructor(
    public _translateService: TranslateService
  ) {

    
    this.languages = [
      {
        id: 'fr',
        title: 'Français',
        flag:'assets/icons/flags/fr.png'
      },
      {
        id: 'en',
        title: 'English',
        flag:'assets/icons/flags/us.png'
      },
    ];
  }
  setFlag(f):Object{
    return {'background-image' : f , };
  }
  ngOnInit(): void
  {
    this._translateService.use('fr');
  }
  /**
     * Set the language
     *
     * @param lang
     */
  setLanguage(lang): void {
    // Set the selected language for the toolbar
    this.selectedLanguage = lang;
    localStorage.setItem('local', lang);

    // Use the selected language for translations
    this._translateService.use(lang.id);
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
}
