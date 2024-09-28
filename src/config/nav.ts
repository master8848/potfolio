import { Cog, Globe, User, HomeIcon, Book } from "lucide-react";
import { type LucideIcon } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export interface SidebarLink {
  title: string;
  href: string;
  icon?: LucideIcon;
}

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Home", icon: HomeIcon },
  { href: "/dashboard/blogs", title: "Blogs", icon: Book },
  { href: "/dashboard/account", title: "Account", icon: User },
  { href: "/dashboard/settings", title: "Settings", icon: Cog },
];

export const additionalLinks: AdditionalLinks[] = [];
