import { Request, Response, NextFunction } from 'express';
import {
  RealtimeKeyword,
  RealtimeKeywordDocument,
} from '../models/RealtimeKeyword';
import logger from '../utils/logger';

export const saveRealtimeKeyword = (realtimeKeywords: string[]) => {
  const newKeywords = new RealtimeKeyword({ realtimeKeywords });
  newKeywords.save(err => {
    if (err) logger.error(err);
    else logger.debug('save keyword to db');
  });
};
