import type { Builder, Command, Describe, Handler } from 'landlubber'

interface Options {
  name: string
}

export const command: Command = 'hello name'

export const describe: Describe = 'Say hello'

export const builder: Builder = {
  name: {
    type: 'string',
    default: 'landlubber',
    describe: 'Who to greet'
  }
}

export const handler: Handler<Options> = async ({ name, logger }) => {
  logger.info({ landlubber: name }, 'Ahoy!')
}
