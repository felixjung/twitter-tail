import { TwitterTailPage } from './app.po';

describe('twitter-tail App', function() {
  let page: TwitterTailPage;

  beforeEach(() => {
    page = new TwitterTailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
