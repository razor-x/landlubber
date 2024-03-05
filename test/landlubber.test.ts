import test from 'ava'

import {
  type DefaultContext,
  defaultMiddleware,
  landlubber,
  type MiddlewareFunction} from 'landlubber'

import * as assertCommand from './fixtures/assert-command.js'
import * as defaultCommand from './fixtures/default-command.js'
import type { TestContext } from './fixtures/test-context.js'

test('command runs with default context', async (t) => {
  const argv = await landlubber([defaultCommand], {
    argv: ['', '', 'foo', 'bar']
  }).parse()
  t.truthy(argv)
})

test('command runs with test context', async (t) => {
  const testMiddleware: MiddlewareFunction = (argv) => {
    argv['t'] = t
  }

  await landlubber<TestContext>([assertCommand], {
    middleware: [testMiddleware],
    argv: ['', '', 'assert', 'bar']
  }).parse()
})

test('runs multiple commands', async (t) => {
  const testMiddleware: MiddlewareFunction = (argv) => {
    argv['t'] = t
  }

  await landlubber<TestContext>([defaultCommand, assertCommand], {
    middleware: [testMiddleware],
    argv: ['', '', 'foo', 'bar']
  }).parse()

  await landlubber<TestContext>([defaultCommand, assertCommand], {
    middleware: [testMiddleware],
    argv: ['', '', 'assert', 'bar']
  }).parse()
})

test('logger is in default context', async (t) => {
  const testMiddleware: MiddlewareFunction = (argv) => {
    argv['t'] = t
    argv['assertion'] = (context: Partial<DefaultContext>) => {
      t.truthy(context.logger)
    }
  }

  await landlubber<TestContext>([assertCommand], {
    middleware: [...defaultMiddleware, testMiddleware],
    argv: ['', '', 'assert', 'bar']
  }).parse()
})

test('logger is not in overridden context', async (t) => {
  const testMiddleware: MiddlewareFunction = (argv) => {
    argv['t'] = t
    argv['assertion'] = (context: Partial<DefaultContext>) => {
      t.is(context.logger, undefined)
    }
  }

  await landlubber<TestContext>([assertCommand], {
    middleware: [testMiddleware],
    argv: ['', '', 'assert', 'bar']
  }).parse()
})
