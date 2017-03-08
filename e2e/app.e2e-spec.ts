import { NameMatchObservableExamplePage } from './app.po';

describe('name-match-observable-example App', function() {
  let page: NameMatchObservableExamplePage;

  beforeEach(() => {
    page = new NameMatchObservableExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
