import * as crawler from '../../src/controllers/crawl';

jest.mock('../../src/controllers/crawl.ts');

test('is crawl method called', async () => {
  await crawler.crawl();
  expect(crawler.crawl).toHaveBeenCalled();
});
