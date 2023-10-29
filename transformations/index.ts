import type { Transform } from 'jscodeshift'

import substituteCompositionAPI from './substitute-composition-api'

const transformationMap: Record<string, Transform> = {
  'substitute-composition-api': substituteCompositionAPI,
}

export type TransformationName = keyof typeof transformationMap

export function getTransformationByName(name: string): Transform | undefined {
  return transformationMap[name]
}
