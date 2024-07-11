
import React from 'react'
import ArticlesIndex from './ListLayout'
import { getAllArticles } from '@/lib/getAllArticles'

const page = async () => {
    const articles = (await getAllArticles()).map(({ component, ...meta }) => meta)
    return (
        <div><ArticlesIndex articles={articles} /></div>
    )
}

export default page