

export const categoryNameToSlug = (name) => name
  .split(' ')
  .map(word => word.toLowerCase())
  .join('-')

export const categorySlugToName = (slug) => slug
  .split('-')
  .map(word => word[0].toUpperCase() + word.substring(1))
  .join(' ')

export const tagNameToSlug = (name) => name.replace(' ', '-')

export const tagSlugToName = (slug) => slug.replace('-', ' ')
