import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { LinkPreview } from "@/components/ui/link-preview";
import { formatDate } from "@/lib/formatDate";
import { env } from "process";
import React from "react";

const CardLayout = ({ articles }) => {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {articles.map((article, i) => (
        // <LinkPreview url={env.NEXT_PUBLIC_SITE_URL + `/potfolio/articles/${article.slug}`}>

        <BentoGridItem
          key={i.title}
          title={article.title}
          description={article.description}
          header={article.header}
          icon={
            <span className="text-gray-500 text-sm">
              {" "}
              {formatDate(article.date)}
            </span>
          }
          className="min-h-32"
        />
        // </LinkPreview>
      ))}
    </BentoGrid>
  );
};

export default CardLayout;
