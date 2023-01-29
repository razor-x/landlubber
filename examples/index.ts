#!/usr/bin/env tsx

import landlubber from 'index.js'

import * as adventure from './adventure.js'

const commands = [adventure]

await landlubber(commands).parse()
