import { Component, Input } from '@angular/core';
import { TwitterService } from './../../services/twitter.service';

import './tweet-list.component.css';

@Component({
  selector: 'tt-tweet-list',
  styleUrls: ['./tweet-list.component.css'],
  template: `
    <tt-tweet
      *ngFor="let tweet of tweets; trackBy: trackById"
      [tweet]="tweet">
    </tt-tweet>
  `
})
export class TweetListComponent {
  @Input() tweets: Array<any>;

  constructor() { }

  trackById(index, tweet) {
    return tweet.id;
  }
}
