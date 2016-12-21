import { AuditViewerPage } from './app.po';

describe('audit-viewer App', function() {
  let page: AuditViewerPage;

  beforeEach(() => {
    page = new AuditViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
