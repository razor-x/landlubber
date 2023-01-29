import test from 'ava'

import { landlubber } from 'index.js'

import * as command from './fixtures/default-command.js'

test('runs command with default context', async (t) => {
  const argv = await landlubber([command], {
    argv: ['', '', 'foo', 'bar']
  }).parse()
  t.truthy(argv)
})
