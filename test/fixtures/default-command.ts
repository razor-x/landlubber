import type { Builder, Command, Describe, Handler } from 'index.js'

interface Options {
  input: string
}

export const command: Command = 'foo input'

export const describe: Describe = 'Command to test default context'

export const builder: Builder = {
  input: {
    type: 'string'
  }
}

export const handler: Handler<Options> = async () => {}
