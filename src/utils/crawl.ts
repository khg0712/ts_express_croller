import cheerio from 'cheerio';
import axios from 'axios';
import logger from '../utils/logger';

export const crawl = async () => {
  logger.info('crawl realtime keyword');
  const response = await axios('https://www.naver.com/');
  const $ = cheerio.load(response.data);
  const crawledRealtimeKeywords = $('.ah_roll_area.PM_CL_realtimeKeyword_rolling ul').text();
  const realtimeKeywords = crawledRealtimeKeywords
                            .split('\n')
                            .filter(val => val !== '')
                            .filter(val => isNaN(parseInt(val, 10)));
  return realtimeKeywords;
};
