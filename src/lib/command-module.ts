import type { CommandModule as YargsCommandModule } from 'yargs'

import type { DefaultContext } from 'lib/context.js'

export type CommandModule<Context> = Omit<YargsCommandModule, 'handler'> & {
  handler: Handler<any, Context>
}

export type Aliases = YargsCommandModule['aliases']
export type Builder = YargsCommandModule['builder']
export type Command = YargsCommandModule['command']
export type Deprecated = YargsCommandModule['deprecated']
export type Describe = YargsCommandModule['describe']

export type Handler<Options = EmptyOptions, Context = DefaultContext> = (
  args: Context & Options
) => void | Promise<void>

export type EmptyOptions = Record<string, never>
