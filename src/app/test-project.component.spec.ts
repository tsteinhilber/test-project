import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TestProjectAppComponent } from '../app/test-project.component';

beforeEachProviders(() => [TestProjectAppComponent]);

describe('App: TestProject', () => {
  it('should create the app',
      inject([TestProjectAppComponent], (app: TestProjectAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'test-project works!\'',
      inject([TestProjectAppComponent], (app: TestProjectAppComponent) => {
    expect(app.title).toEqual('test-project works!');
  }));
});
