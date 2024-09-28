import { LinkPreview } from "@/components/ui/link-preview";
import { cn } from "@/lib/utils";
import Image from "next/image";

const rotations = [
  "rotate-2",
  "-rotate-2",
  "rotate-2",
  "rotate-2",
  "-rotate-2",
];
const features = [
  {
    name: "Cubic logics",
    link: "https://www.hr365.us/",
    location: "Garabhavipalya,Bangalore, India",
    time: "Dec 2022-April 2024",
    description: `Worked as app lead for Timesheet
365 alongside 4 other team members and also
worked on multiple issues through SPFX and
data stored only using Microsoft list and
permission management.`,
    imageSrc: "/photos/image-1.jpg",
    imageAlt: "my picture 1",
  },
  {
    name: "Spell Innovation",
    link: "https://spellinnovation.com/",
    location: "Baneshwor, Kathmandu, Nepal",
    time: "Jul 2022-Dec 2022",
    description: `Worked as React developer
ground up for SMS(School Management System)
and LMS(Learning management system) with
Rest API and connected with a backed team to
make UI and Flow of development smooth`,
    imageSrc: "/photos/image-2.jpg",
    imageAlt: "my picture 2",
  },
  {
    name: "Himal advertising",
    link: "https://himaladagency.com.np/",
    location: "Baneshwor, Kathmandu, Nepal",
    time: "Feb 2020-Feb 2022",
    description: `Worked with a client under
supervision of Senior Developer to create and
maintain multiple projects on behalf of other
companies and peoples.`,
    imageSrc: "/photos/image-3.jpg",
    imageAlt: "my picture 3",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PreviousJobs() {
  return (
    <div className="cntColor">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight  sm:text-4xl">
            Previous Journeys
          </h2>
          <p className="mt-4 ">
            I have worked on multiple companies which is summarized below.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-5 xl:col-start-3",
                  "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-8 xl:col-span-9"
                )}
              >
                <LinkPreview url={feature.link}>
                  <a target="_blank" href={feature.link}>
                    <h3 className="text-lg font-medium underline decoration-wavy decoration-green-600">
                      {feature.name}
                    </h3>
                    <br />
                    <h3 className=" font-medium ">{feature.time}</h3>
                    <h3 className=" font-medium ">{feature.location}</h3>
                    <br />
                  </a>
                </LinkPreview>
                <p className="mt-2 text-sm ">{feature.description}</p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? "lg:col-start-9" : "xl:col-start-1",
                  "flex-auto lg:row-start-1 lg:col-span-4 xl:col-span-2"
                )}
              >
                {/* <div className="aspect-w-1 aspect-h-[1.5] rounded-lg  overflow-hidden"> */}
                {/* <div className="aspect-w-1 aspect-h-2 rounded-lg  overflow-hidden"> */}
                <img
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className={cn(
                    " object-cover rounded-lg lg:block  hidden",
                    rotations[featureIdx % rotations.length]
                  )}
                />
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
