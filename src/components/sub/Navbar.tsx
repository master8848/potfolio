"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
import TransitionLink from "@/components/ui/transition-link";
import { cn } from "@/lib/utils";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const { setTheme, themes } = useTheme();
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
              )}
            >
              <span className="text-green-400">MB</span>
              <span className="text-blue-500 pl-2">SKS</span>
            </span>
          </a>

          <NavigationMenu
            className={
              " hidden md:flex "
            }
          >
            <NavigationMenuList className="space-x-2">
              {NavbarValues.map((c) => (
                <NavigationMenuItem
                  key={"Desktop" + c.name}
                  className=" py-2 px-3 rounded-sm  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <NavigationMenuLink>
                    <TransitionLink href={c.link}>{c.name}</TransitionLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {themes?.map((theme) => (
                  <DropdownMenuItem
                    key={theme}
                    onClick={() => setTheme(theme)}
                    className="capitalize"
                  >
                    {theme}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="mobile block md:hidden mr-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="block md:hidden">
                  <Menu size={28} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>@Saurav sanjel</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {NavbarValues.map((c) => (
                    <TransitionLink href={c.link} key={"mobileNavigation" + c.name}>
                      <DropdownMenuItem>{c.name}</DropdownMenuItem>
                    </TransitionLink>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;