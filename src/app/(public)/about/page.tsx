"use client";

import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { LinksContex, Resume, Socials } from "../components/Cta";
import { TracingBeam } from "@/components/ui/tracing-beam";
import PdfResume from "./pdfViewer";

export default function AboutMe() {
  return (
    <div>
      <TracingBeam className="px-6">
        <ContextMenu>
          <ContextMenuTrigger>
            <div className=" overflow-hidden   cntColor">
              <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden lg:block  absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                  <div>
                    <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
                      Introduction
                    </h2>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                      Saurav sanjel
                    </h3>
                  </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="relative lg:row-start-1 lg:col-start-2">
                    <svg
                      className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-gray-200"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                      />
                    </svg>
                    <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                      <figure>
                        <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                          <img
                            className="rounded-lg shadow-lg object-cover object-center"
                            src="/photos/image-4.jpg"
                            alt="Whitney leaning against a railing on a downtown street"
                            width={1184}
                            height={1376}
                          />
                        </div>
                        <figcaption className="mt-3 flex text-sm text-gray-400">
                          {/* <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" /> */}
                          <span className="ml-2">
                            Photograph by Shikha Sanjel ❣️
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="mt-8 lg:mt-0">
                    <div className="text-base max-w-prose mx-auto lg:max-w-none">
                      <p className="text-lg text-gray-400"></p>
                    </div>
                    <div className="mt-5 prose prose-indigo text-gray-400 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                      <p>
                        I live in Banglore, Karnataka, where I work on multiple
                        ideas and learn new things.
                      </p>
                      <p>
                        Overtime I have been working on different projects and
                        learning new things making myself profecient in multiple
                        technologies.Over time I have worked on my frontend ,
                        backend and database which have sharpen my skills on all
                        fronts.
                      </p>
                      <p>
                        I’ve loved making things for as long as I can remember,
                        and wrote my first program when I was 13 years old.
                        After an age of 15 I have been devloping and learning
                        technologies for making websites better and faster.
                      </p>

                      <p>
                        Web developer who can work in a team. Help out on skill
                        development for team members.Fast learner and can grasp
                        new things quickly including complicated concepts and
                        problem solving techniques.
                      </p>

                      <p>
                        Willing to take challenges and help others out while
                        being in the process of learning.
                      </p>
                    </div>
                    <div className="mt-5">
                      <Resume />
                      <PdfResume />
                    </div>
                    <div className="mt-5">
                      <Socials />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContextMenuTrigger>
          <LinksContex />
        </ContextMenu>
      </TracingBeam>
    </div>
  );
}
