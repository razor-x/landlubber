# Landlubber

[![npm](https://img.shields.io/npm/v/landlubber.svg)](https://www.npmjs.com/package/landlubber)
[![GitHub Actions](https://github.com/razor-x/landlubber/actions/workflows/check.yml/badge.svg)](https://github.com/razor-x/landlubber/actions/workflows/check.yml)

The quickest way to write commands for yargs without leaving the shore.

## Description

Landlubber is a tiny wrapper around [yargs].

- Streamlines writing commands as individual ES modules modules.
- Has pretty logging with [pino] and [pino-pretty].
- Written in TypeScript so command arguments and context are fully typed.

[pino]: https://getpino.io/
[pino-pretty]: https://github.com/pinojs/pino-pretty
[yargs]: https://yargs.js.org/

## Installation

Add this as a dependency to your project using [npm] with

```
$ npm install landlubber
```

[npm]: https://www.npmjs.com/

## Usage

### Hello world

#### TypeScript

##### hello.ts

```ts
import type { Builder, Command, Describe, Handler } from 'landlubber'

interface Options {
  name: string
}

export const command: Command = 'hello name'

export const describe: Describe = 'Say hello'

export const builder: Builder = {
  name: {
    type: 'string',
    default: 'landlubber',
    describe: 'Who to greet'
  }
}

export const handler: Handler<Options> = async ({ name, logger }) => {
  logger.info({ landlubber: name }, 'Ahoy!')
}
```

##### index.ts

```ts
#!/usr/bin/env tsx

import landlubber from 'landlubber'

import * as hello from './hello.js'

const commands = [hello]

await landlubber(commands).parse()
```

#### JavaScript

##### hello.js

```ts
export const command = 'hello name'

export const describe = 'Say hello'

export const builder = {
  name: {
    type: 'string',
    default: 'landlubber',
    describe: 'Who to greet'
  }
}

export const handler = async ({ name, logger }) => {
  logger.info({ landlubber: name }, 'Ahoy!')
}
```

##### index.js

```js
#!/usr/bin/env node

import landlubber from 'landlubber'

import * as hello from './hello.js'

const commands = [hello]

await landlubber(commands).parse()
```

## Development and Testing

### Quickstart

```
$ git clone https://github.com/razor-x/landlubber.git
$ cd landlubber
$ nvm install
$ npm install
```

Run the command below in a separate terminal window:

```
$ npm run test:watch
```

Primary development tasks are defined under `scripts` in `package.json`
and available via `npm run`.
View them with

```
$ npm run
```

### Source code

The [source code] is hosted on GitHub.
Clone the project with

```
$ git clone git@github.com:razor-x/landlubber.git
```

[source code]: https://github.com/razor-x/landlubber

### Requirements

You will need [Node.js] with [npm] and a [Node.js debugging] client.

Be sure that all commands run under the correct Node version, e.g.,
if using [nvm], install the correct version with

```
$ nvm install
```

Set the active version for each shell session with

```
$ nvm use
```

Install the development dependencies with

```
$ npm install
```

[Node.js]: https://nodejs.org/
[Node.js debugging]: https://nodejs.org/en/docs/guides/debugging-getting-started/
[npm]: https://www.npmjs.com/
[nvm]: https://github.com/creationix/nvm

### Publishing

Use the [`npm version`][npm-version] command to release a new version.
This will push a new git tag which will trigger a GitHub action.

Publishing may be triggered using a [workflow_dispatch on GitHub Actions].

[npm-version]: https://docs.npmjs.com/cli/version
[workflow_dispatch on GitHub Actions]: https://github.com/razor-x/landlubber/actions?query=workflow%3Aversion

## GitHub Actions

_GitHub Actions should already be configured: this section is for reference only._

The following repository secrets must be set on [GitHub Actions]:

- `NPM_TOKEN`: npm token for installing and publishing packages.

These must be set manually.

### Secrets for Optional GitHub Actions

The version and format GitHub actions
require a user with write access to the repository.
Set these additional secrets to enable the action:

- `GH_TOKEN`: A personal access token for the user.
- `GIT_USER_NAME`: The GitHub user's real name.
- `GIT_USER_EMAIL`: The GitHub user's email.
- `GPG_PRIVATE_KEY`: The GitHub user's [GPG private key].
- `GPG_PASSPHRASE`: The GitHub user's GPG passphrase.

[GitHub Actions]: https://github.com/features/actions
[GPG private key]: https://github.com/marketplace/actions/import-gpg#prerequisites

## Contributing

Please submit and comment on bug reports and feature requests.

To submit a patch:

1. Fork it (https://github.com/razor-x/landlubber/fork).
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Make changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin my-new-feature`).
6. Create a new Pull Request.

## License

This npm package is licensed under the MIT license.

## Warranty

This software is provided by the copyright holders and contributors "as is" and
any express or implied warranties, including, but not limited to, the implied
warranties of merchantability and fitness for a particular purpose are
disclaimed. In no event shall the copyright holder or contributors be liable for
any direct, indirect, incidental, special, exemplary, or consequential damages
(including, but not limited to, procurement of substitute goods or services;
loss of use, data, or profits; or business interruption) however caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.
