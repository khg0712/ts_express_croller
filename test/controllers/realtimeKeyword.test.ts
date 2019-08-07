import { saveRealtimeKeyword } from '../../src/controllers/realtimeKeyword';
import * as RealtimeKeywordModel from '../../src/models/RealtimeKeyword';
import logger from '../../src/utils/logger';

const realtimeWrodSpy = jest.spyOn(
  RealtimeKeywordModel as any,
  'RealtimeKeyword',
);

const loggerInfoSpy = jest.spyOn(logger, 'info');
const loggerErrorSpy = jest.spyOn(logger, 'error');

describe('realtime keyword controller works well', () => {
  it('save ', () => {
    saveRealtimeKeyword([]);
    expect(realtimeWrodSpy).toHaveBeenCalledTimes(1);
    expect(loggerErrorSpy).toHaveBeenCalledTimes(0);
    expect(loggerInfoSpy).toHaveBeenCalledTimes(0);
  });
});
