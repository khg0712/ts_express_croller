import { PORT, MONGODB_URI, ENV } from '../src/config';

describe('env variable test', () => {
  it('is test envirment', () => {
    expect(ENV).toBe('test');
  });
  it('load right config file', () => {
    expect(PORT).toBe('3000');
    expect(MONGODB_URI).toBe('mongodb://localhost:27017/realtimeKeyword');
  });
});
