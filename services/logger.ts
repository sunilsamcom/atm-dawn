import { createLogger, format, transports, level } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import TransportStream from "winston-transport";
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

const transportsFile: TransportStream[] = [
  new DailyRotateFile({
    filename: `logs/${filename}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d',
  }),
  new transports.File({ filename: 'logs/error.log', level: 'error' }),
  new transports.File({ filename: 'logs/combined.log' }),
]

const transportConsole: TransportStream = new transports.Console()

/**
 * This logger is meant to be used only by back-end components.
 * For front-end please use console.log and its associated
 *
 * If you need to get a Front-end working Winston logger, please discuss with project lead and refer to:
 * https://github.com/winstonjs/winston/issues/287#issuecomment-647196496
 *
 * Although there are solutions provided there for TypeScript and JavaScript, this is likely suboptimal and
 * it's likely better to keep winston's usage to backend
 */
export const logger = createLogger({
  level: 'info',
  format: myFormat,
  defaultMeta: { service: 'atm-dawn' },
  transports: [
    transportConsole
  ], //.concat(transportsFile),
});

// logger.configure overwrites any previous logger settings set in createLogger
// logger.configure({
//   level: `verbose`
// })

if (process.env.NODE_ENV !== 'production') {
  transportConsole.level = 'silly'
}
