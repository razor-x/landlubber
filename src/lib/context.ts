import { type LoggerContext, createLogger } from './logger.js'

export type DefaultContext = LoggerContext

export const defaultMiddleware = [createLogger]
