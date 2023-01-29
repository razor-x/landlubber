import process from 'node:process'

import yargs, { type Argv, type MiddlewareFunction } from 'yargs'

import type { CommandModule } from 'lib/command-module.js'
import { type DefaultContext, defaultMiddleware } from 'lib/context.js'

export interface LandlubberOptions {
  middleware?: MiddlewareFunction[]
  argv?: readonly string[]
}

export const landlubber = <Context = DefaultContext>(
  commands: Array<CommandModule<Context>> = [],
  {
    middleware = defaultMiddleware,
    argv = process.argv
  }: LandlubberOptions = {}
): Argv => {
  const builder = yargs(argv.slice(2)).middleware(middleware)

  // UPSTREAM: Array argument overload type for yargs.command not implemented.
  // https://github.com/yargs/yargs/issues/2211
  for (const command of commands) builder.command(command)

  return builder.demandCommand(1, 1).recommendCommands().strict()
}
