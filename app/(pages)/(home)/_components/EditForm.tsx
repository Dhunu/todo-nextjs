"use client";

import { z } from "zod";

const formSchema = z.object({
    title: z
        .string()
        .min(2, { message: "Title should be atlest 2 characters long" })
        .max(50, { message: "Title should be atmost 50 characters long" }),
    description: z
        .string()
        .min(2, { message: "Description should be atlest 2 characters long" }),
});

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import TodoContext from "@/context/TodoContext";

interface EditFormProps {
    title: string;
    description: string;
}

export default function EditForm({ title, description }: EditFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: title,
            description: description,
        },
    });

    const { setTodo } = useContext(TodoContext);

    function onSubmit(data: z.infer<typeof formSchema>) {
        setTodo({
            title: data.title,
            description: data.description,
        });
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Update</Button>
            </form>
        </Form>
    );
}
