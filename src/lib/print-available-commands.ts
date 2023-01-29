import type { CommandModule } from 'yargs'

// UPSTREAM: https://github.com/yargs/yargs/issues/1005
export const printAvailableCommands = (commands: CommandModule[]): string => `
Available commands:
  ${commands.map(({ command }) => command).join('\n  ')}
`
