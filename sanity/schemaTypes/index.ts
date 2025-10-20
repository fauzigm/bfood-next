import { type SchemaTypeDefinition } from 'sanity'

import {menuType} from './menuType'
import {categoryType} from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuType, categoryType],
}
