import { ITCampSamplePage } from './app.po';

describe('itcamp-sample App', () => {
  let page: ITCampSamplePage;

  beforeEach(() => {
    page = new ITCampSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
