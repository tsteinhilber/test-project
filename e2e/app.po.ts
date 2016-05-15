export class TestProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('test-project-app h1')).getText();
  }
}
