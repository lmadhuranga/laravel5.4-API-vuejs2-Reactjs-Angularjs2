import { Angularjs4Page } from './app.po';

describe('angularjs4 App', () => {
  let page: Angularjs4Page;

  beforeEach(() => {
    page = new Angularjs4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
