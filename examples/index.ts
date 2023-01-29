#!/usr/bin/env tsx

import { landlubber } from 'index.js'

import * as todo from './todo.js'

const commands = [todo]

await landlubber(commands)
