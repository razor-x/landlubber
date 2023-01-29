import type { ExecutionContext } from 'ava'

import type { DefaultContext } from 'index.js'

export type TestContext = DefaultContext & {
  t: ExecutionContext
  assertion?: (context: Partial<DefaultContext>) => void | Promise<void>
}
