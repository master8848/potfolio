

import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../app/potfolio/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/page.mdx'], {
    cwd: path.join(process.cwd(), 'src/app/potfolio'),
  })
  console.log(articleFilenames)
  let articles = await Promise.all(articleFilenames.map(importArticle))
  console.log(articles)
  // @ts-ignore
  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
