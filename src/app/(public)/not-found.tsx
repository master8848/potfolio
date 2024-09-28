/* This example requires Tailwind CSS v2.0+ */

import Link from "next/link";

const links = [
  { title: "About Me", description: "My introduction and background" },
  { title: "Projects", description: "Gallary of projects I have completed." },
  { title: "Blog", description: "Read my latest news and articles" },
];

export default function Custom404() {
  return (
    <div className="bg-slate-800 h-full text-slate-200  min-h-[100svh]">
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto pb-16 sm:pb-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold  tracking-tight sm:text-5xl">
              This page does not exist.
            </h1>
            <p className="mt-2 text-lg ">
              The page you are looking for could not be found.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold  tracking-wide uppercase">
              Orther links
            </h2>
            <ul
              role="list"
              className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative py-6 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0"></div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium ">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-accent">
                        <a href="#" className="focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {link.title}
                        </a>
                      </span>
                    </h3>
                    <p className="text-base ">{link.description}</p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    {/* <ChevronRightIcon className="h-5 w-5 " aria-hidden="true" /> */}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/"
                className="text-base font-medium  text-accent-foreground"
              >
                Or go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
