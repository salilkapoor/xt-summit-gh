// Use types from .versionrc.js so that when generating CHANGELOG there are no inconsistencies
import { types } from './.versionrc'
const standardVersionTypes = types
const typeEnums = standardVersionTypes.map((t) => t.type)

export const extends = ['@commitlint/config-conventional']
export const rules = {
  'type-enum': [2, 'always', typeEnums]
}
