import { type Logger, pino } from 'pino'
import pinoPretty from 'pino-pretty'
import type { MiddlewareFunction } from 'yargs'

export interface LoggerContext {
  logger: Logger
}

export const createLogger: MiddlewareFunction = (argv) => {
  const stream = pinoPretty.default()
  argv['logger'] = pino(stream)
}
