import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable()
export class TwitterService {
  private socket: SocketIOClient.Socket;

  constructor() {
    const host = `${window.location.protocol}//${window.location.hostname}:8081`; // eslint-disable-line
    this.socket = io.connect(host);
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('error', this.handleError);
  }

  stream(tag: string): Observable<any> {
    this.socket.emit('subscribe', tag);
    return Observable.create((observer: any) => {
      this.socket.on('tweet',
        ({ filter, tweets }: { filter: string, tweets: Array<any> }) => {
          console.log('Tweets', tweets);
          const mappedTweets = tweets.map(tweet => this.createTweet(tweet));
          console.log('Mapped tweets', mappedTweets);
          observer.next(mappedTweets);
      });
      return function() {
        console.log(`Unsubscribed from tag ${tag}`);
        this.socket.emit('unsubscribe', tag);
      }
    });
  }

  private connect(): void {
    console.log('Successfully connected to socket.io server.');
  }

  private disconnect(): void {
    console.log('Disconnected from socket.io server.');
  }

  private handleError(error: string): void {
    console.log(`Error: ${error}`);
  }

  private createTweet(
    { id, text, user, entities, created_at }:
      { id: number, text: string, user: any, entities: any, created_at: string}
  ) {
    const formattedUser = this.createUser(user);
    const tweetDate = this.parseTweetDate(created_at);
    console.log('User', formattedUser);
    return { id, text, user: formattedUser, dateTime: tweetDate };
  }

  private createUser(user) {
    const userProps = {
      name: <string> 'name',
      profile_image_url_https: <string> 'profileImageUrl',
      screen_name: <string> 'handle',
      verified: <string> 'verified'
    };

    const pickedUser = <_.Dictionary<{}>> _.pick(user, _.keys(userProps));
    const mappedUser = _.mapKeys(pickedUser,
      (val, key) => _.get(userProps, key));

    // FIXME: figure out why this is not working!?
    // const pickedUser = _.flow(
      // _.curryRight(_.pick)(_.keys(userProps)),
      // _.curryRight(_.mapKeys, 2)(key => _.get(userProps, key))
    // )(user);

    return mappedUser;
  }

  private parseTweetDate(tweetDate) {
    const m = moment(tweetDate);
    const date = m.format('YYYY-MM-DD');
    const time = m.format('HH:mm:SS');
    return { date: <string> date, time: <string> time };
  }
}
