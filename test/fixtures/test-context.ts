import type { ExecutionContext } from 'ava'

import type { DefaultContext } from 'landlubber'

export type TestContext = DefaultContext & {
  t: ExecutionContext
  assertion?: (context: Partial<DefaultContext>) => void | Promise<void>
}
