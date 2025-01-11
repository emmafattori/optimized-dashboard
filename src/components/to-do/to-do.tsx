import React, { useEffect, useState } from "react";
import { db, collection, addDoc, getDocs } from '../../../firebase-config'

interface Todo {
    id: string;
    text: string;
  }

export const Todo = () => {

    const [todoInput, setTodoInput] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    // Adding a TODO to Firestore
    const addUserToFirestore = async (e: React.FormEvent) => {
        e.preventDefault();

      try {
        // Create a reference to the 'todos' collection
        const docRef = await addDoc(collection(db, "todos"), {
          text: todoInput
        });
        setTodoInput("");  // Reset the input state to empty string

  
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    useEffect(() => {
        const fetchTodos = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "todos"));
            const fetchedTodos: Todo[] = [];
            querySnapshot.forEach((doc) => {
                    fetchedTodos.push({ id: doc.id, text: doc.data().text })

            
            });
      
            setTodos(fetchedTodos);  // Update state with the fetched todos
          } catch (e) {
            console.error("Error fetching todos: ", e);
          }
        };
      
        fetchTodos();  // Call the function when the component mounts
      }, []);

    return (
        <section className="shadow-xl w-1/2 p-4 rounded-xl m-2">
            <div>
                <h2>Daily To Dos</h2>
                <form onSubmit={addUserToFirestore}>
                    <input id="todoInput" type="text" placeholder="Get groceries..."        value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)} />
                    <button id="addTodoButton" type="submit">Add</button>
                </form>
                <div className="list">
                <ul id="todoList"></ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
                </div>
            </div>
        </section>
    )
}