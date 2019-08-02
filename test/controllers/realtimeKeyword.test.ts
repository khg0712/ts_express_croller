import { saveRealtimeKeyword } from '../../src/controllers/realtimeKeyword';
import {
  RealtimeKeyword,
  RealtimeKeywordDocument,
} from '../../src/models/RealtimeKeyword';
import logger from '../../src/utils/logger';

jest.mock('../../src/models/RealtimeKeyword');
const MockRealtimeKeyword = new RealtimeKeyword() as jest.Mocked<
  RealtimeKeywordDocument
>;
MockRealtimeKeyword.save = jest.fn();

describe('realtime keyword controller works well', () => {
  it('save ', () => {
    // const realtimeKeywordModel = jest.spyOn(Model, 'RealtimeKeyword');
    saveRealtimeKeyword([]);
    expect(RealtimeKeyword).toHaveBeenCalledTimes(1);
  });
});
