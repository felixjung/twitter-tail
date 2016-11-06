import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tt-tweet',
  template: `
    <div class="tweet__profile-picture-wrapper">
      <img
        [src]="tweet.user.profileImageUrl">
    </div>
    <div
      class="tweet__text"
      [innerHTML]="tweet.text">
    </div>
  `,
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  @Input() tweet: Object;
  constructor() { }
}
