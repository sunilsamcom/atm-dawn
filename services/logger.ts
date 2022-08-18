import { createLogger, format, transports, level as Level } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
const filename = 'application'

const myFormat = format.combine(
  format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  format.colorize(),
  format.errors({ stack: true }),
  format.splat(),
  format.printf(
    ({ level, message, label = process.env.NODE_ENV, timestamp }) =>
      `${timestamp} [${label}] ${level}: ${message}`
  )
)

export const logger = createLogger({
  level: 'info',
  format: myFormat,
  defaultMeta: { service: 'atm-dawn' },
  transports: [
    new DailyRotateFile({
      filename: `logs/${filename}-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '30d',
    }),
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
    // - Write all logs with importance level of 'silly' or less to the console
    new transports.Console({ level: 'silly' })
  ],
});

// logger.configure overwrites any previous logger settings set in createLogger
// logger.configure({
//   level: `verbose`
// })

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  // logger.add(new transports.Console({
  //   format: myFormat,
  // }));
}
