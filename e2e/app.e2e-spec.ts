import { W3D1Page } from './app.po';

describe('w3-d1 App', () => {
  let page: W3D1Page;

  beforeEach(() => {
    page = new W3D1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
