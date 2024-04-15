import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import HomePageComponent from "./_components/HomePageComponent";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
    const user = await currentUser();
    return (
        <div className="h-full w-full">
            {user ? (
                <div className="flex justify-center items-center text-5xl font-extrabold">
                    <HomePageComponent />
                </div>
            ) : (
                <div className="flex justify-center items-center  font-extrabold h-[calc(100vh-64px)] w-full flex-col gap-10">
                    <span className="lg:text-5xl text-2xl">
                        User not logged in
                    </span>
                    <SignInButton>
                        <Button
                            className="font-bold lg:text-3xl text-xl p-5 py-8"
                            variant="outline"
                        >
                            Sign in
                        </Button>
                    </SignInButton>
                </div>
            )}
        </div>
    );
}
