import React, { useEffect, useState } from "react";
import { db, collection, addDoc, getDocs, deleteDoc, doc } from '../../../firebase-config'

interface Todo {
    id: string;
    text: string;
  }

export const Todo = () => {

    const [todoInput, setTodoInput] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    // Adding a TODO to Firestore
    const addToDoToFirestore = async (e: React.FormEvent) => {
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

    // Delete a To-Do from Firestore and update the state
    const deleteToDo = async (id: string) => {
        try {
            // Create a reference to the specific todo document to delete
            const docRef = doc(db, "todos", id);
            await deleteDoc(docRef);  // Delete the document from Firestore

            // Update the state to remove the deleted todo from the UI
            setTodos(todos.filter(todo => todo.id !== id));
            console.log(`To-Do with ID ${id} deleted`);
        } catch (e) {
            console.error("Error deleting document: ", e);
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
                <form onSubmit={addToDoToFirestore}>
                    <input id="todoInput" type="text" placeholder="Get groceries..."        value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)} />
                    <button id="addTodoButton" type="submit">Add</button>
                </form>
                <div className="list">
                <ul id="todoList"></ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}
                           <button 
                                    onClick={() => deleteToDo(todo.id)}
                                    className="ml-2 text-red-500"
                                    aria-label="Delete Todo"
                                >
                                    X
                                </button>
                    </li>
                ))}
                </div>
            </div>
        </section>
    )
}