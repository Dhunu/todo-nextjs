import { ReactNode, useState } from "react";
import TodoContext from "../context/TodoContext";

const TodoContextProvider = ({ children }: { children: ReactNode }) => {
    const [todo, setTodo] = useState(null);

    return (
        <TodoContext.Provider value={{ todo, setTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
