import Head from 'next/head'

import { Card } from '@/components/dev/Card'
import { SimpleLayout } from '@/components/dev/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { LinkPreview } from '@/components/ui/link-preview'
import { env } from 'process'

function Article({ article }) {
    return (
        <LinkPreview url={env.NEXT_PUBLIC_SITE_URL + `/articles/${article.slug}`}>
            <article className="md:grid md:grid-cols-4 md:items-baseline">
                <Card className="md:col-span-3">
                    <Card.Title href={`/articles/${article.slug}`}>
                        {article.title}
                    </Card.Title>
                    <Card.Eyebrow
                        as="time"
                        dateTime={article.date}
                        className="md:hidden"
                        decorate
                    >
                        {formatDate(article.date)}
                    </Card.Eyebrow>
                    <Card.Description>{article.description}</Card.Description>
                    <Card.Cta>Read article</Card.Cta>
                </Card>
                <Card.Eyebrow
                    as="time"
                    dateTime={article.date}
                    className="mt-1 hidden md:block"
                >
                    {formatDate(article.date)}
                </Card.Eyebrow>
            </article >
        </LinkPreview>
    )
}

export default async function ArticlesIndex() {
    const articles = (await getAllArticles()).map(({ component, ...meta }) => meta)
    return (
        <>
            <Head>
                <title>Projects - Masterboy SKS</title>
                <meta
                    name="description"
                    content="My projects and thoughts on Projects."
                />
            </Head>
            <SimpleLayout
                title="Articles"
                intro="My projects and thoughts on Projects."
            >
                <div className="">
                    <div className="flex max-w-3xl flex-col space-y-16 ">
                        {articles.map((article) => (
                            <Article key={article.slug} article={article} />
                        ))}
                    </div>
                </div>
            </SimpleLayout>
        </>
    )
}

// export async function getStaticProps() {
//     return {
//         props: {
//             articles: (),
//         },
//     }
// }
