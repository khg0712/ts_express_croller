import cheerio from 'cheerio';
import { parse } from '../../../../src/utils/crawl/naverRealtimeKeyword';

describe('parse works well', () => {
  it('cheerio works well', () => {
    const load = jest.spyOn(cheerio, 'load');
    expect(parse('')).toStrictEqual([]);
    expect(load).toHaveBeenCalledTimes(1);
  });
});
