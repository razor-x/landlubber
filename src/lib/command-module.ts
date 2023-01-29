import type { CommandBuilder } from 'yargs'

import type { DefaultContext } from 'lib/context.js'

export type Command = string

export type Builder = CommandBuilder

export type Handler<Options = EmptyOptions, Context = DefaultContext> = (
  args: Context & Options
) => void | Promise<void>

export type EmptyOptions = Record<string, never>

export interface CommandModule {
  command: Command
  builder: Builder
  handler: Handler<any, any>
}
