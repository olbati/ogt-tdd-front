import { TtdformationPage } from './app.po';

describe('ttdformation App', () => {
  let page: TtdformationPage;

  beforeEach(() => {
    page = new TtdformationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
