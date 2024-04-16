import { createContext } from "react";

const initialData = [
    {
        id: 1,
        title: "First todo",
        description: "This is the first todo",
    }
]

const TodoContext = createContext({});

export default TodoContext;