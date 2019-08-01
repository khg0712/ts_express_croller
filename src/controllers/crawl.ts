import logger from '../utils/logger';
import { Request, Parse } from '../types';

export const crawl = async (request: Request, parse: Parse) => {
  logger.info('crawl realtime keyword');
  const { status, data } = await request();
  if (status === 200) return parse(data);
  return null;
};
