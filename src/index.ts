import app from './app';
import logger from './utils/logger';

const server = app.listen(app.get('port'), () => {
  logger.info(`app started on ${app.get('port')} port ${app.get('env')} level`);
});

export default server;
