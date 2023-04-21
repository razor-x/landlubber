import { type LoggerContext,createLogger } from 'lib/logger.js'

export type DefaultContext = LoggerContext

export const defaultMiddleware = [createLogger]
