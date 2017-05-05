import { ReAutopressAppPage } from './app.po';

describe('re-autopress-app App', () => {
  let page: ReAutopressAppPage;

  beforeEach(() => {
    page = new ReAutopressAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
