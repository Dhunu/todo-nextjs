import React from "react";
import { LiaSpinnerSolid } from "react-icons/lia";

export default function LoadingLayout() {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <LiaSpinnerSolid className="animate-spin text-4xl" />
        </div>
    );
}
