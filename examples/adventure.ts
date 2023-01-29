import { setTimeout } from 'node:timers/promises'

import type { Builder, Command, Describe, Handler } from 'index.js'

interface Options {
  adventurer: string
  age: number
  minLevel: number
}

export const command: Command = 'adventure [adventurer] [age] [min-level]'

export const describe: Describe = 'Go on an adventure!'

export const builder: Builder = {
  adventurer: {
    type: 'string'
  },
  age: {
    type: 'number'
  },
  minLevel: {
    type: 'number'
  }
}

export const handler: Handler<Options> = async ({
  adventurer = 'Finn',
  age = 12,
  minLevel = 3,
  logger
}) => {
  logger.info({ adventurer, age }, 'Ready for adventure!')

  const currentLevel = await setTimeout(0, getLevel())

  if (currentLevel < minLevel) {
    const err = new Error('Level too low.')
    logger.error({ currentLevel, minLevel, err }, 'Too low level, try again!')
    return
  }

  logger.info({ adventurer, age, currentLevel }, 'You leveled up!')
}

const getLevel = (): number => Math.floor(10 * Math.random())
