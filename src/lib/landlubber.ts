import process from 'node:process'

import yargs, { type MiddlewareFunction } from 'yargs'

import type { CommandModule } from 'lib/command-module.js'
import { defaultMiddleware } from 'lib/context.js'
import { printAvailableCommands } from 'lib/print-available-commands.js'

export interface LandlubberOptions {
  middleware?: MiddlewareFunction[]
}

export const landlubber = async (
  commands: CommandModule[] = [],
  { middleware = defaultMiddleware }: LandlubberOptions = {}
): Promise<void> => {
  const parser = yargs(process.argv.slice(2)).middleware(middleware)

  // UPSTREAM: Array argument overload type for yargs.command not implemented.
  // https://github.com/yargs/yargs/issues/2211
  for (const command of commands) parser.command(command)

  await parser
    .demandCommand(1, 1, printAvailableCommands(commands))
    .recommendCommands()
    .strict()
    .parse()
}
