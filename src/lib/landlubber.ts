import process from 'node:process'

import yargs, { type Argv, type MiddlewareFunction } from 'yargs'

import type { CommandModule } from 'lib/command-module.js'
import { defaultMiddleware } from 'lib/context.js'

export interface LandlubberOptions {
  middleware?: MiddlewareFunction[]
}

export const landlubber = (
  commands: CommandModule[] = [],
  { middleware = defaultMiddleware }: LandlubberOptions = {}
): Argv => {
  const argv = yargs(process.argv.slice(2)).middleware(middleware)

  // UPSTREAM: Array argument overload type for yargs.command not implemented.
  // https://github.com/yargs/yargs/issues/2211
  for (const command of commands) argv.command(command)

  return argv.demandCommand(1, 1).recommendCommands().strict()
}
