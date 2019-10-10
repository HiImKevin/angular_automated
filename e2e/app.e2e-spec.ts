import { AngularAutomatedPage } from './app.po';

describe('angular-automated App', function() {
  let page: AngularAutomatedPage;

  beforeEach(() => {
    page = new AngularAutomatedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
