import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TwitterService } from './services/twitter.service';
import { FilterInputComponent } from './components/filter-input/filter-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    TweetComponent,
    FilterInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
