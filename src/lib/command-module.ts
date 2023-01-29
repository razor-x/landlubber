import type { CommandModule as YargsCommandModule } from 'yargs'

import type { DefaultContext } from 'lib/context.js'

export type CommandModule = Omit<YargsCommandModule, 'handler'> & {
  handler: Handler<any, any>
}

export type Aliases = CommandModule['aliases']
export type Builder = CommandModule['builder']
export type Command = CommandModule['command']
export type Deprecated = CommandModule['deprecated']
export type Describe = CommandModule['describe']

export type Handler<Options = EmptyOptions, Context = DefaultContext> = (
  args: Context & Options
) => void | Promise<void>

export type EmptyOptions = Record<string, never>
