import { request } from '../../../../src/utils/crawl/naverRealtimeKeyword';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('request to crawl naverRealtimeKeyword works well', () => {
  it('axios called well', async () => {
    await request();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
