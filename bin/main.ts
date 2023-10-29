#!/usr/bin/env node

import * as fs from 'fs'
// @ts-ignore
import adapt from 'vue-jscodeshift-adapter'

import * as yargs from 'yargs'

import runTransformation from '../src/runTransformation'

import { getTransformationByName } from '../transformations'

const log = console.log.bind(console)

const { _: files, transformation } = yargs
  .usage('Usage: $0 [file pattern]')
  .option('transformation', {
    alias: 't',
    type: 'string',
    describe: 'Name or path of the transformation module',
  })
  .demandOption('transformation')
  .help()
  .parseSync()

async function main() {
  const { globbySync } = await import('globby')
  const resolvedPaths = globbySync(files as string[])
  const transformationModule = getTransformationByName(transformation)

  if (!transformationModule) {
    throw new Error(`Transformation ${transformation} not found`)
  }

  log(`Processing ${resolvedPaths.length} files…`)

  for (const p of resolvedPaths) {
    const fileInfo = {
      path: p,
      source: fs.readFileSync(p).toString(),
    }
    try {
      const result = runTransformation(fileInfo, adapt(transformationModule))
      fs.writeFileSync(p, result)
    } catch (e) {
      console.error(e)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
