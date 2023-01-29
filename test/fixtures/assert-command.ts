import type { Builder, Command, Describe, Handler } from 'index.js'

import type { TestContext } from './test-context.js'

interface Options {
  input: string
}

export const command: Command = 'assert input'

export const describe: Describe = 'Command to test assertions'

export const builder: Builder = {
  input: {
    type: 'string'
  }
}

export const handler: Handler<Options, TestContext> = async ({
  input,
  assertion,
  t,
  ...args
}) => {
  t.is(input, 'bar')
  if (assertion != null) await assertion(args)
}
