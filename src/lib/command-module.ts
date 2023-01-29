import type { CommandBuilder } from 'yargs'

import type { DefaultContext } from 'lib/context.js'

export type Command = string

export type Builder = CommandBuilder

export type Handler<Options = EmptyOptions, Context = DefaultContext> = (
  args: Context & Options
) => void | Promise<void>

export type EmptyOptions = Record<string, never>

export interface CommandModule {
  aliases?: readonly string[] | string | undefined
  builder?: Builder
  command?: Command
  deprecated?: boolean | string | undefined
  describe?: string | false | undefined
  handler: Handler<any, any>
}
