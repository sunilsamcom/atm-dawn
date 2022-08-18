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
