import cheerio from 'cheerio';
import axios from 'axios';
import logger from '../utils/logger';

export const crawl = async () => {
  logger.info('crawl realtime keyword');
  const response = await axios('https://www.naver.com/');

  let $: CheerioStatic;
  if (response.status === 200) $ = cheerio.load(response.data);
  else return null;

  const crawledRealtimeKeywords = $(
    '.ah_roll_area.PM_CL_realtimeKeyword_rolling ul > li span.ah_k',
  );
  const keywords: string[] = $(crawledRealtimeKeywords)
    .map(
      (i, ele): string => {
        return $(ele).text();
      },
    )
    .get();
  return keywords;
};
