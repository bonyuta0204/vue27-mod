import jscodeshift, { Transform } from 'jscodeshift'

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

  const j = jscodeshift
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
