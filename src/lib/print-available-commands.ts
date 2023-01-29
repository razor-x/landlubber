import type { CommandModule } from 'lib/command-module.js'

// UPSTREAM: https://github.com/yargs/yargs/issues/1005
export const printAvailableCommands = (commands: CommandModule[]): string => `
Available commands:
  ${commands.map(({ command }) => command).join('\n  ')}
`
