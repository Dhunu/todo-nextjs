import React from "react";
import Logo from "./Logo";
import Links, { links } from "./Links";
import Profile from "./Profile";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LinkSheet from "./_components/LinkSheet";

export default function Navbar() {
    return (
        <div className="w-full h-16 px-5 md:px-10 flex justify-between items-center sticky top-0 left-0 right-0 bg-black">
            <div className="flex gap-5">
                <LinkSheet />
                <Logo />
            </div>
            <div className="flex gap-5">
                <div className="hidden md:flex">
                    <Links />
                </div>
                <Profile />
            </div>
        </div>
    );
}
