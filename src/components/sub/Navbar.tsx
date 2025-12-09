"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Switch } from "../ui/switch";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

interface INavbarValues {
  name: string;
  link: string;
}

const NavbarValues: INavbarValues[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About me",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/potfolio",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
];

const Navbar = (): React.JSX.Element => {
  // const [show, setShow] = useState(false)
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction <= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        // flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/20 rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-5000 pr-2 pl-8 py-2  items-center justify-center space-x-4
        className="fixed w-screen top-0 z-5000 bg-transparent"
      >
        <div className="lg:container container-xs mx-auto flex flex-wrap p-2 flex-row items-center justify-between">
          <a className=" flex title-font md:font-medium md:items-center  mb-0  py-2 px-3">
            <Image
              src="/logo.jpg"
              className="rounded-full "
              alt="logo"
              quality={100}
              width={30}
              height={30}
            />
            <span
              className={cn(
                "ml-3 text-xl font-serif"
                //  show ? "hidden" : " flex"
              )}
            >
              <span className="text-green-400">MB</span>
              <span className="text-blue-500 pl-2">SKS</span>
            </span>
          </a>

          <NavigationMenu
            className={
              " hidden md:flex "
              //  show ? "flex " : " hidden " +
            }
          >
            <NavigationMenuList className="space-x-2">
              {NavbarValues.map((c) => (
                <NavigationMenuItem
                  key={"Desktop" + c.name}
                  className=" py-2 px-3 rounded-sm  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <NavigationMenuLink>
                    <Link href={c.link}>{c.name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="mobile block md:hidden mr-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="block md:hidden">
                <Menu size={28} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>@Saurav sanjel</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {NavbarValues.map((c) => (
                  <Link href={c.link}>
                    <DropdownMenuItem key={"mobileNavigation" + c.name}>
                      {c.name}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;
