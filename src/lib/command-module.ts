import type { CommandBuilder, CommandModule as YargsCommandModule } from 'yargs'

import type { DefaultContext } from 'lib/context.js'

export type Command = string

export type Builder = CommandBuilder

export type Handler<Options = EmptyOptions, Context = DefaultContext> = (
  args: Context & Options
) => void | Promise<void>

export type EmptyOptions = Record<string, never>

export type CommandModule = Omit<YargsCommandModule, 'handler'> & {
  handler: Handler<any, any>
}
