"use client";

import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { startViewTransition } from "react";

const TransitionLink = ({
  href,
  children,
  ...rest
}: LinkProps & { children: React.ReactNode }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    startViewTransition(() => {
      router.push(href.toString());
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

export default TransitionLink;
