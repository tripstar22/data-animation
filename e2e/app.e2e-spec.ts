import { DataAnimationPage } from './app.po';

describe('data-animation App', () => {
  let page: DataAnimationPage;

  beforeEach(() => {
    page = new DataAnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('da works!');
  });
});
