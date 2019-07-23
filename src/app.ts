import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGODB_URI, ENV } from './utils/config';
import { crawl } from './utils/crawl';
import { saveRealtimeKeyword } from './controllers/realtimeKeyword';
import logger from './utils/logger';

const app = express();
const mongodbUri = MONGODB_URI || '';

mongoose.connect(mongodbUri, { useNewUrlParser: true }).then(() => {
  logger.info('db connected');
}).catch((err) => {
  logger.error('db connect errored');
  logger.error(err);
});

const crawlResultSaver = async () => {
  const result = await crawl();
  saveRealtimeKeyword(result);
};

setInterval(crawlResultSaver, 1000 * 10);

app.set('port', PORT || 3000);
app.set('env', ENV || 'development');

export default app;
