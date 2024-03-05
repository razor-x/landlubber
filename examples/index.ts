#!/usr/bin/env tsx

import landlubber from 'landlubber'

import * as adventure from './adventure.js'
import * as hello from './hello.js'

const commands = [adventure, hello]

await landlubber(commands).parse()
