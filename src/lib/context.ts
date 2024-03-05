import { createLogger, type LoggerContext } from 'lib/logger.js'

export type DefaultContext = LoggerContext

export const defaultMiddleware = [createLogger]
