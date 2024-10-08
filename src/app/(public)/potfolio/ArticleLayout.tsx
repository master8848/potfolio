"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";

import { Container } from "@/components/dev/Container";
import { formatDate } from "@/lib/formatDate";
import { Prose } from "./Prose";
import { TracingBeam } from "@/components/ui/tracing-beam";

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArticleLayout({ children, meta, isRssFeed = false }) {
  const router = useRouter();
  if (isRssFeed) {
    return children;
  }

  return (
    <>
      <TracingBeam className="px-6">
        <Head>
          <title>{`${meta.title} - Masterboy SKS`}</title>
          <meta name="description" content={meta.description} />
        </Head>
        {/* <Container className="mt-16 lg:mt-32"> */}
        <div className="xl:relative  relative w-full max-w-4xl mx-auto h-full  rounded-3xl cntColor py-16 px-2 ">
          <div className="mx-auto max-w-2xl">
            {/* {previousPathname && ( */}
            <button
              type="button"
              onClick={() => {
                document.referrer
                  ? router.back()
                  : router.push("/potfolio/articles");
              }}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-blue-800/5 ring-1 ring-blue-900/5 transition dark:border dark:border-blue-700/50 dark:bg-blue-800 dark:ring-0 dark:ring-white/10 dark:hover:border-blue-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:top-[3.625rem] xl:-left-4 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-blue-500 transition group-hover:stroke-blue-700 dark:stroke-blue-500 dark:group-hover:stroke-blue-400" />
            </button>
            {/* )} */}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-blue-800 dark:text-blue-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-base "
                >
                  <span className="h-4 w-0.5 rounded-full bg-blue-200 dark:bg-blue-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <div className="mt-8 atricle-css ">{children}</div>
            </article>
          </div>
        </div>
        {/* </Container> */}
      </TracingBeam>
    </>
  );
}
