"use client"
import React, { useState } from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Switch } from '../ui/switch'
import Link from 'next/link'

const Navbar = () => {
  const { setTheme } = useTheme()
  const [show, setShow] = useState(false)
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
    <AnimatePresence mode='wait'>
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
        // flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4
        className="fixed w-[100vw] top-0 z-[5000] bg-transparent"
      >
        <div className="lg:container container-xs mx-auto flex flex-wrap p-2 flex-row items-center ">
          <a className=" flex title-font md:font-medium md:items-center  mb-0  py-2 px-3">
            <Image src="/logo.jpg" className='rounded-full ' alt="logo" quality={100} width={30} height={30} />
            <span className={show ? "hidden " : " flex " + "  ml-3 text-xl font-serif"}>
              <span className='text-green-400'>
                MB
              </span>
              <span className='text-blue-500 pl-2'>
                SKS
              </span>
            </span>
          </a>

          <NavigationMenu className={show ? "flex " : " hidden " + " md:ml-auto md:flex flex-wrap items-center text-base justify-end"}>
            <NavigationMenuList className='space-x-2'>
              <NavigationMenuItem className=" py-2 px-3 rounded-sm  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                <NavigationMenuLink>
                  <Link href={"/"}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className=" py-2 px-3 rounded-sm  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                <NavigationMenuLink>
                  <Link href={"/about"}>
                    About me
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className=" py-2 px-3 rounded-sm  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                <NavigationMenuLink>
                  <Link href={"/potfolio"}>
                    Projects
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className=" py-2 px-3 rounded-sm  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                <NavigationMenuLink>
                  <Link href={"/blogs"}>
                    Blogs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <button className="block md:hidden ml-auto mr-5">
            <Switch id="Menue open" checked={show} onClick={() => setShow(c => !c)} />
          </button>
        </div></motion.header></AnimatePresence>
  )
}

export default Navbar