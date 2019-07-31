import mongoose from 'mongoose';
import moment from 'moment';

export type RealtimeKeywordDocument = mongoose.Document & {
  realtimeKeywords: string[];
  timeStamp: string;
};

const realtimeKeywordsSchema = new mongoose.Schema({
  realtimeKeywords: { type: [String], default: [] },
  timeStamp: {
    type: String,
    default: () => moment().format('YYYY-MM-DD HH:mm:ss'),
  },
});

// tslint:disable-next-line: variable-name
export const RealtimeKeyword = mongoose.model<RealtimeKeywordDocument>(
  'RealtimeKeyword',
  realtimeKeywordsSchema,
);
