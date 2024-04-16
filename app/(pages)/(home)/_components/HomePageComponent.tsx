import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Delete, EditIcon, Trash2 } from "lucide-react";
import React from "react";
import EditForm from "./EditForm";

const todos = [
    {
        id: 1,
        title: "Todo 1",
        description: "Description 1",
    },
    {
        id: 2,
        title: "Todo 2",
        description: "Description 2",
    },
    {
        id: 3,
        title: "Todo 3",
        description: "Description 3",
    },
    {
        id: 4,
        title: "Todo 4",
        description: "Description 4",
    },
    {
        id: 5,
        title: "Todo 5",
        description: "Description 5",
    },
    {
        id: 6,
        title: "Todo 6",
        description: "Description 6",
    },
    {
        id: 7,
        title: "Todo 7",
        description: "Description 7",
    },
];

export default function HomePageComponent() {
    return (
        <div className="flex max-w-screen-md mx-auto flex-col w-full mt-10">
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold p-5 rounded-md border bg-blue-900 w-48">
                All Todos:
            </h1>
            <div className="flex flex-col gap-5 mt-10 w-full">
                {todos.map((todo) => (
                    <div className="flex" key={todo.id}>
                        <div className="flex flex-1 flex-col gap-2 bg-blue-800/75 py-5 pl-5 rounded-l-lg">
                            <h2 className="text-lg font-semibold">
                                {todo.title}
                            </h2>
                            <p className="text-sm">{todo.description}</p>
                        </div>
                        <div className="hover:cursor-pointer flex flex-col p-5 items-center bg-blue-900 rounded-r-lg gap-5">
                            <Dialog>
                                <DialogTrigger>
                                    <EditIcon className="w-6 h-6 text-green-500" />
                                </DialogTrigger>
                                <DialogContent>
                                    <EditForm
                                        title={todo.title}
                                        description={todo.description}
                                    />
                                </DialogContent>
                            </Dialog>

                            <Trash2 className="w-6 h-6 text-slate-300 p-0.5 rounded-md bg-red-600" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
