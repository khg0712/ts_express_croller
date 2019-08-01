import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGODB_URI, ENV } from './config';
import { crawl } from './utils/crawl';
import { saveRealtimeKeyword } from './controllers/realtimeKeyword';
import logger from './utils/logger';
import { index } from './controllers/home';
import path from 'path';

const app = express();
const mongodbUri = MONGODB_URI || '';

mongoose
  .connect(mongodbUri, { useNewUrlParser: true })
  .then(() => {
    logger.info('db connected');
    const crawlResultSaver = async () => {
      const result = await crawl();
      result && saveRealtimeKeyword(result);
    };
    if (ENV !== 'test') {
      crawlResultSaver();
      setInterval(crawlResultSaver, 1000 * 10 * 60);
    }
  })
  .catch(err => {
    logger.error('db connect errored');
    logger.error(err);
  });

app.set('port', PORT || 3000);
app.set('env', ENV || 'development');
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.get('/', index);

export default app;
export const disconnectDB = mongoose.disconnect;
