"use client";

import {
  ArrowDownToLine,
  Linkedin,
  Github,
  AtSign,
  PhoneCall,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useToast } from "@/components/ui/use-toast";
import { RESUME_URL } from "../about/pdfViewer";
import { SOCIALS_LIST } from "@/components/sub/SocialLists";

export function Socials({ show = false }) {
  return (
    <>
      <h2 className="  tracking-tight ">
        {show ? (
          <span className="p-2 font-bold">Right click to copy.</span>
        ) : null}
        <ul className="flex space-x-3">
          {SOCIALS_LIST.map((curr) => (
            <li
              key={"view" + curr.name}
              className="p-3 bg-accent text-accent-foreground rounded-full  border-white border"
            >
              <a target="_blank" href={curr.link}>
                {curr.icon}
              </a>
            </li>
          ))}
        </ul>
      </h2>
    </>
  );
}
export function Resume() {
  return (
    <div className="mt-8 flex lg:mt-0 lg:shrink-0">
      <div className="inline-flex rounded-md shadow-sm border-white border">
        <a
          href={RESUME_URL}
          download={true}
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md  bg-accent  text-accent-foreground"
        >
          Download Resume{"  "} <ArrowDownToLine className="ml-2" />
        </a>
      </div>
    </div>
  );
}
export default function Cta() {
  return (
    <div className="">
      <ContextMenu>
        <ContextMenuTrigger className="">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <Socials show></Socials>
            <Resume />
          </div>
        </ContextMenuTrigger>
        <LinksContex />
      </ContextMenu>
    </div>
  );
}

export function LinksContex() {
  const { toast } = useToast();

  return (
    <ContextMenuContent className="w-64">
      <ContextMenuLabel>Copy link</ContextMenuLabel>
      {SOCIALS_LIST.map((curr) => (
        <ContextMenuItem
          key={"List" + curr.name}
          inset
          onSelect={() => {
            navigator.clipboard
              .writeText(curr.link)
              .then(() =>
                toast({
                  title: "Copied sucessfully✅",
                })
              )
              .catch((e) => {
                toast({ title: "Could not copy!" });
                console.error(e);
              });
          }}
        >
          {curr.icon}
          <span className="pl-2">{curr.name}</span>
        </ContextMenuItem>
      ))}
    </ContextMenuContent>
  );
}
