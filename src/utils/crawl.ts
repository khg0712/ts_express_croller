import cheerio from 'cheerio';
import axios from 'axios';
import logger from '../utils/logger';

export const crawl = async () => {
  logger.info('crawl realtime keyword');
  const response = await axios('https://www.naver.com/');
  const $ = cheerio.load(response.data);
  const crawledRealtimeKeywords = $(
    '.ah_roll_area.PM_CL_realtimeKeyword_rolling ul > li span.ah_k',
  );
  const keywords: string[] = $(crawledRealtimeKeywords).map((i, ele):string => {
    return $(ele).text();
  }).get();
  return keywords;
};
