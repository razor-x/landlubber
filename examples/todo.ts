import { type Builder, type Command, type Handler, todo } from 'index.js'

interface Options {
  x: string
}

export const command: Command = 'todo x'

export const builder: Builder = {
  x: {
    type: 'string'
  }
}

export const handler: Handler<Options> = async ({ x, logger }) => {
  logger.info({ data: todo(x) }, 'TODO')
}
