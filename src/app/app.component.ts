import { Component, OnInit, OnDestroy } from '@angular/core';
import { TwitterService } from './services/twitter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tt-app',
  template: `
    <main>
      <tt-tweet-list [tweets]="tweets"></tt-tweet-list>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  tweets: Array<any>;

  constructor(private twitterService: TwitterService) { }

  ngOnInit() : void {
    this.subscribe();
  }

  ngOnDestroy() : void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }

  private subscribe(tag: string = '#Berlin') : void {
    this.tweets = [];
    if (this.subscription) { this.subscription.unsubscribe(); }
    this.subscription = this.twitterService.stream(tag)
      .subscribe(tweets => this.updateViewModel(tweets));
  }

  private updateViewModel(tweets: Array<any>) : void {
    this.tweets = tweets.concat(...this.tweets);
  }
}
