import { createLogger, LoggerOptions, transports, format } from 'winston';
import winstonDailyRotateFile from 'winston-daily-rotate-file';
import fs from 'fs';
import { ENV } from './config';

const options: LoggerOptions = {
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.json(),
  ),
  transports: [
    new transports.Console({
      level: ENV === 'production' ? 'error' : 'debug',
      format: format.combine(
        format.colorize(),
        format.printf(info => `${info.timestamp} ${info.level} ${info.message}`),
      ),
    }),
    new winstonDailyRotateFile({
      filename: `${process.cwd()}/log/keyword-%DATE%.log`,
      datePattern: 'MM-DD',
      level: 'debug',
      format: format.combine(
        format.printf(info => `${info.timestamp} ${info.level} ${info.message}`),
      ),
      maxFiles: 14,
    }),
  ],
};

const logger = createLogger(options);

if (ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

export default logger;
