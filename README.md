# TwitterTail

This is a small side project I started to try me some Angular 2. It's supposed to
become a web app for [Twitter's streaming
API](https://dev.twitter.com/streaming/overview) allowing you to filter the
stream by text and location.

The [twitter-tail-server](https://github.com/felixjung/twitter-tail-server) node
backend handles the twitter API and emits new tweets to connected clients via
[socket.io](http://socket.io). This Angular 2 frontend handles the socket.io
connection by wrapping it into an RxJS observable and subscribing to it.

At the moment this renders an ever updating list of tweets containing
"#Berlin".

I intend to add the following in the future:

- [ ] A search input to allow entering custom text filters.
- [ ] A map to allow filtering by location.
- [ ] Proper styles.
- [ ] Allow the client to have multiple simultaneous subscriptions, each in a
  column of its own.
