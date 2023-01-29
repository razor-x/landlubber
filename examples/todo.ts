import type { Builder, Command, Describe, Handler } from 'index.js'

interface Options {
  x: string
}

export const command: Command = 'todo x'

export const describe: Describe = 'TODO'

export const builder: Builder = {
  x: {
    type: 'string'
  }
}

export const handler: Handler<Options> = async ({ x, logger }) => {
  logger.info({ data: x }, 'TODO')
}
