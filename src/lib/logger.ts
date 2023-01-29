import { type Logger, pino } from 'pino'
import type { MiddlewareFunction } from 'yargs'

export interface LoggerContext {
  logger: Logger
}

export const createLogger: MiddlewareFunction = (argv) => {
  argv['logger'] = pino({
    transport: {
      target: 'pino-pretty'
    }
  })
}
