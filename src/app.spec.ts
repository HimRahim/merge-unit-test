import { AppService } from './app.service';

describe('Test merge function', () => {
  let appService: AppService;
  beforeEach(() => {
    appService = new AppService();
  });

  test('function should merge and return sorted array', () => {
    expect(appService.merge([1, 2, 3], [7, 5, 5], [2, 3, 4])).toEqual(
      [1, 2, 2, 3, 3, 4, 5, 5, 7].sort((a, b) => a - b),
    );
  });

  test('function should return empty array', () => {
    expect(appService.merge([], [], [])).toEqual([]);
  });
});
