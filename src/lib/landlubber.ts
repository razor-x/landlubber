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
  await yargs(process.argv.slice(2))
    .middleware(middleware)
    // @ts-expect-error UPSTREAM: https://github.com/yargs/yargs/issues/2211
    .command(commands)
    .demandCommand(1, 1, printAvailableCommands(commands))
    .recommendCommands()
    .strict()
    .parse()
}
