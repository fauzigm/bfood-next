import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('BFOOD Backend')
    .items([
      S.documentTypeListItem('categories').title('Categories'),
      S.documentTypeListItem('menu').title('Menu'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['menu', 'categories'].includes(item.getId()!),
      ),
    ])
