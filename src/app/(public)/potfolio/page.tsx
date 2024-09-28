import React, { Suspense } from "react";
import ArticlesIndex from "./ListLayout";
import { getAllArticles } from "@/lib/getAllArticles";

const page = async () => {
  const articles = (await getAllArticles()).map(
    ({ component, ...meta }) => meta
  );
  return (
    <div>
      <Suspense>
        <ArticlesIndex articles={articles} />
      </Suspense>
    </div>
  );
};

export default page;
