"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Add Todo",
        href: "/add-todo",
    },
];

export default function Links() {
    const pathname = usePathname();
    return (
        <div className="gap-5 items-center flex">
            {links.map((link) => (
                <Link
                    href={link.href}
                    key={link.href}
                    className={cn(
                        "font-semibold",
                        link.href === pathname &&
                            "text-green-400 font-extrabold"
                    )}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
}
