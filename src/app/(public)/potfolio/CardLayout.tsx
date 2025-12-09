import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import TransitionLink from "@/components/ui/transition-link";
import { formatDate } from "@/lib/formatDate";
import React from "react";

const CardLayout = ({ articles }) => {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {articles.map((article, i) => (
        <TransitionLink
          href={`/potfolio/articles/${article.slug}`}
          key={i.title}
          style={{ viewTransitionName: `article-${article.slug}` }}
        >
          <BentoGridItem
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
        </TransitionLink>
      ))}
    </BentoGrid>
  );
};

export default CardLayout;
