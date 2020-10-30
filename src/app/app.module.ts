import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { WorkComponent } from './sections/work/work.component';
import { EducationComponent } from './sections/education/education.component';
import { BlogComponent } from './sections/blog/blog.component';
import { ContactComponent } from './sections/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WorkDetailComponent} from './sections/work/work-detail/work-detail.component';


import {MatCardModule} from '@angular/material/card'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';  



// import ngx-translate and the http loader
import { TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';


import {MatRippleModule} from '@angular/material/core'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    WorkComponent,
    EducationComponent,
    BlogComponent,
    ContactComponent,
    WorkDetailComponent
  ],
  entryComponents: [
    WorkDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    MatRippleModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


