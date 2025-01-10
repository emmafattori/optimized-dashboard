import { useState } from "react";

export interface ToDoProps {
    title: string;
    description: string;
    completed: boolean;
}

export const Todo = () => {

    const [todos, setTodos] = useState<ToDoProps[]>([]);

const addTodo = (title: string, description: string) => {
        const newTodo: ToDoProps = {
            title,
            description,
            completed: false,
        }
        setTodos([...todos, newTodo]);
    }
    return (
        <section className="shadow-xl w-1/2 p-4 rounded-xl">


            <div>
                <h2>Daily To Dos</h2>
                <form>
                    <input type="text" placeholder="Get groceries..." />
                    <button onSubmit={() => addTodo('test', 'test')}>Add</button>
                </form>
            </div>
        </section>
    )
}