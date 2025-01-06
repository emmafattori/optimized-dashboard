import { useState } from "react";

export interface ToDoProps {
    title: string;
    description: string;
    completed: boolean;
    dueDate: Date;
}

export const Todo = () => {

    const [todos, setTodos] = useState<ToDoProps[]>([]);
    return (
        <section className="shadow-xl w-1/2 p-4 rounded-xl">This is the todo widget</section>
    )
}