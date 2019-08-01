import { crawl } from '../../src/controllers/crawl';
import { Request, Parse } from '../../src/types/index';

const failedReqest: Request = () =>
  new Promise(resolve => {
    resolve({
      data: '',
      status: 404,
    });
  });
const succeededReqest: Request = () =>
  new Promise(resolve => {
    resolve({
      data: '1234',
      status: 200,
    });
  });
const parse: Parse = data => {
  return `data is ${data}`;
};

describe('crawl works well', () => {
  it('return null when response status is not 200', async () => {
    expect(await crawl(failedReqest, parse)).toBeNull();
  });
  it('return successful parsed word', async () => {
    expect(await crawl(succeededReqest, parse)).toBe('data is 1234');
  });
});
