import { MaterialModule } from './material.module';

describe('MaterialModule', () => {
  let frontendModule: MaterialModule;

  beforeEach(() => {
    frontendModule = new MaterialModule();
  });

  it('should create an instance', () => {
    expect(frontendModule).toBeTruthy();
  });
});
