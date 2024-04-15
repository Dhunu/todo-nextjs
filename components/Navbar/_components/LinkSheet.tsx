"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { links } from "../Links";
import Logo from "../Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LinkSheet() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex md:hidden">
                <CiMenuFries className="text-white w-6 h-6 font-bold" />
            </SheetTrigger>
            <SheetContent
                side="left"
                className="flex flex-col justify-start p-0 gap-5 w-48"
            >
                <div className="w-full h-16 flex justify-start items-center gap-5 pl-5 bg-black">
                    <CiMenuFries className="text-white w-6 h-6 font-bold" />
                    <Logo />
                </div>
                <div className="flex flex-col gap-5">
                    {links.map((link) => (
                        <SheetClose key={link.href}>
                            <Link
                                href={link.href}
                                className={cn(
                                    "font-semibold",
                                    link.href === pathname &&
                                        "text-green-400 font-extrabold"
                                )}
                            >
                                {link.name}
                            </Link>
                        </SheetClose>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}
