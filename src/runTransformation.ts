import jscodeshift, { Transform } from 'jscodeshift'
// @ts-ignore
import getParser from 'jscodeshift/src/getParser'

type FileInfo = {
  path: string
  source: string
}

export default function runTransformation(
  fileInfo: FileInfo,
  transform: Transform,
  params: object = {},
) {
  const { source } = fileInfo

  const parser = getParser("ts")
  const j = jscodeshift.withParser(parser)
  const api = {
    j,
    jscodeshift: j,
    stats: () => {},
    report: () => {},
  }

  const out = transform(fileInfo, api, params)
  if (!out) {
    return source
  }

  return out
}
