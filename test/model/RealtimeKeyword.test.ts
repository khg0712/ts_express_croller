import { RealtimeKeyword } from '../../src/models/RealtimeKeyword';
import { Model } from 'mongoose';
import getMockKeywords from '../../__mocks__/getMockKeywords';
import moment from 'moment';

describe('model', () => {
  it('newKeywords is instance of Model', () => {
    const realtimeKeywords = getMockKeywords();
    const newKeywords = new RealtimeKeyword({ realtimeKeywords });
    expect(newKeywords instanceof Model).toBe(true);
  });
  it('model validates well', () => {
    const realtimeKeywords = getMockKeywords();
    const newKeywords = new RealtimeKeyword({ realtimeKeywords });
    const err = newKeywords.validateSync();
    expect(err).toBeUndefined();
  });
  it('model validates well', () => {
    const realtimeKeywords = getMockKeywords();
    const newKeywords = new RealtimeKeyword({ realtimeKeywords });
    expect(newKeywords.get('timeStamp')).toBe(
      moment().format('YYYY-MM-DD HH:mm:ss'),
    );
  });
});
