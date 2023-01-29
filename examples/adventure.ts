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
    type: 'string',
    default: 'Finn'
  },
  age: {
    type: 'number',
    default: 12
  },
  minLevel: {
    type: 'number',
    default: 3
  }
}

export const handler: Handler<Options> = async ({
  adventurer,
  age,
  minLevel,
  logger
}) => {
  logger.info({ adventurer, age }, 'Ready for adventure!')

  const currentLevel = await getLevel()

  if (currentLevel < minLevel) {
    const err = new Error('Level too low.')
    logger.error({ currentLevel, minLevel, err }, 'Too low level, try again!')
    return
  }

  logger.info({ adventurer, age, currentLevel }, 'You leveled up!')
}

const getLevel = async (): Promise<number> => Math.floor(10 * Math.random())
