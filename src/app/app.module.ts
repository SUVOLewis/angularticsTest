import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes} from '@angular/router';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'news', component: NewsComponent}
    ]),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
