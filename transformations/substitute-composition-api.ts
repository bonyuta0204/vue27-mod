// transform.js

import type { FileInfo, API } from 'jscodeshift'

function convertImport(fileInfo: FileInfo, api: API) {
  const j = api.jscodeshift

  return j(fileInfo.source)
    .find(j.ImportDeclaration)
    .forEach((path) => {
      if (path.node.source.value === '@vue/composition-api') {
        path.node.source.value = 'vue'
      }
    })
    .toSource()
}

export default convertImport
