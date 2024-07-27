"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    return (
        <header className="w-full h-[76px] bg-transparent px-2 sm:px-4">
            <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={65} height={65} className="size-[65px] object-contain" />
                </Link>

                <NavigationMenu>
                    <NavLinks />
                </NavigationMenu>
            </div>
        </header>
    )
}

function NavLinks() {
    const pathname = usePathname();

    return (
        <NavigationMenuList className="hidden sm:flex gap-x-6">
            <NavigationMenuItem>
                <NavigationMenuLink
                    href="/"
                    className={cn(
                        "text-base hover:text-reddish focus:text-reddish duration-100",
                        pathname === "/" && "text-reddish"
                    )}
                >
                    Home
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink
                    href="/"
                    className={cn(
                        "text-base hover:text-reddish focus:text-reddish duration-100",
                        pathname === "/new" && "text-reddish"
                    )}
                >
                    New
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink
                    href="/"
                    className={cn(
                        "text-base hover:text-reddish focus:text-reddish duration-100",
                        pathname === "/popular" && "text-reddish"
                    )}
                >
                    Popular
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink
                    href="/"
                    className={cn(
                        "text-base hover:text-reddish focus:text-reddish duration-100",
                        pathname === "/trending" && "text-reddish"
                    )}
                >
                    Trending
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink
                    href="/"
                    className={cn(
                        "text-base hover:text-reddish focus:text-reddish duration-100",
                        pathname === "/categories" && "text-reddish"
                    )}
                >
                    Categories
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    )
}