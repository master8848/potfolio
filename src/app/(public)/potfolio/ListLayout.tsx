"use client";
import Head from "next/head";

import { Card } from "@/components/dev/Card";
import { SimpleLayout } from "@/components/dev/SimpleLayout";
import { formatDate } from "@/lib/formatDate";
import { LinkPreview } from "@/components/ui/link-preview";
import { env } from "process";
import { useCallback, useState } from "react";
import CardLayout from "./CardLayout";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card as UiCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Article({ article }) {
  return (
    // <LinkPreview url={env.NEXT_PUBLIC_SITE_URL + `/potfolio/articles/${article.slug}`}>
    <article className="md:grid md:grid-cols-4 md:items-baseline ">
      <Card className="md:col-span-3 ">
        <Card.Title href={`/potfolio/articles/${article.slug}`}>
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
    </article>
    // </LinkPreview>
  );
}

export default function ArticlesIndex({ articles }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const AddQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      router.push(pathname + "?" + params.toString());
    },
    [searchParams]
  );
  const view = searchParams.get("view") || "list";
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
        resetval={view}
      >
        <div className="">
          <Tabs
            value={view}
            className=""
            onValueChange={(val) => {
              AddQueryString("view", val);
            }}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
            </TabsList>
            <TabsContent value="list" className="mt-16">
              <div className="flex max-w-3xl flex-col space-y-16   ">
                {articles.map((article) => (
                  <Article key={article.slug} article={article} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="grid">
              <CardLayout articles={articles} />
            </TabsContent>
          </Tabs>
        </div>
      </SimpleLayout>
    </>
  );
}

// export async function getStaticProps() {
//     return {
//         props: {
//             articles: (),
//         },
//     }
// }
