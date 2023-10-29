# vue27-mod 🛠

> Effortlessly migrate your Vue.js 2.6 projects to Vue.js 2.7!

![GitHub](https://img.shields.io/github/license/bonyuta0204/vue27-mod)


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Command Line Options](#command-line-options)
  - [Predefined Transformations](#predefined-transformations)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction

`vue27-mod` is a CLI tool designed to automate the process of upgrading your Vue.js 2.6 projects to 2.7. Say goodbye to the tedious manual changes; with a single command, your project will be up-to-date!

## Features

- 🚀 Fast code transformations
- 🎯 Accurate Vue.js syntax handling
- 📦 Out-of-the-box transformations
- 🛠 Built on top of `jscodeshift`

## Installation

You can install `vue27-mod` using npm or yarn.

```bash
# using npm
npm install vue27-mod

# using yarn
yarn add vue27-mod
```

## Usage

To run `vue27-mod`, you can use either `npx` or `yarn`:

```bash
npx vue27-mod <glob pattern> --transformations <transformation name>
```

or

```bash
yarn vue27-mod <glob pattern> --transformations <transformation name>
```

### Command Line Options

| Option              | Description                                       |
|---------------------|---------------------------------------------------|
| `<glob pattern>`    | File pattern to match (e.g., `src/**/*.vue`)       |
| `--transformations` | Transformation(s) to apply (see below)            |

### Predefined Transformations

We currently support the following transformations:

- `substitute-composition-api`: Converts `@vue/composition-api` import to `vue` import.

## Examples

Here's how to use the `substitute-composition-api` transformation:

```bash
npx vue27-mod src/**/*.vue --transformations substitute-composition-api
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you find any bugs or have suggestions for additional transformations.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

