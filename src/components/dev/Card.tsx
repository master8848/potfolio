import { cn } from "@/lib/utils";
import Link from "next/link";

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Card({ as: Component = "div", className, children }) {
  return (
    // @ts-ignore
    <Component
      className={cn(className, "group relative flex flex-col items-start  ")}
    >
      {children}
    </Component>
  );
}

Card.Link = function CardLink({ children, ...props }) {
  return (
    <>
      <div className=" absolute -inset-y-6 -inset-x-4  scale-95 opacity-0 transition  group-hover:scale-100 group-hover:opacity-100 dark:bg-green-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      {/* @ts-ignore */}
      <Link {...props}>
        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

Card.Title = function CardTitle({ as: Component = "h2", href, children }) {
  return (
    // @ts-ignore
    <Component className="text-base font-semibold tracking-tight text-green-500 underline decoration-wavy ">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

Card.Description = function CardDescription({ children }) {
  return <p className="relative z-10 mt-2 text-sm ">{children}</p>;
};

Card.Cta = function CardCta({ children }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-green-300/50 group-hover:underline group-hover:text-green-600 "
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

Card.Eyebrow = function CardEyebrow({
  as: Component = "p",
  decorate = false,
  className,
  children,
  ...props
}) {
  return (
    // @ts-ignore
    <Component
      className={cn(
        "relative z-10 order-first mb-3 flex items-center text-sm   ",
        className,
        decorate && "pl-3.5"
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-blue-200 dark:bg-blue-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
