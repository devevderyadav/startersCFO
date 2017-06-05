import { StrCFOPage } from './app.po';

describe('str-cfo App', () => {
  let page: StrCFOPage;

  beforeEach(() => {
    page = new StrCFOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
