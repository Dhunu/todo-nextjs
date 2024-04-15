import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function Profile() {
    const user = await currentUser();
    if (user) {
        return (
            <UserButton
                afterSignOutUrl="/"
                afterMultiSessionSingleSignOutUrl="/"
                showName
            />
        );
    }

    return (
        <SignInButton afterSignInUrl="/" afterSignUpUrl="/" mode="redirect" />
    );
}
