import { NgRecipeBookCapPage } from './app.po';

describe('ng-recipe-book-cap App', () => {
  let page: NgRecipeBookCapPage;

  beforeEach(() => {
    page = new NgRecipeBookCapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
