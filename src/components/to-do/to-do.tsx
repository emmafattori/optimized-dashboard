import React, { useState } from "react";
import { db, collection, addDoc } from '../../../firebase-config'

interface Todo {
    id: string;
    text: string;
  }

export const Todo = () => {

    const [todoInput, setTodoInput] = useState("");

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

                </div>
            </div>
        </section>
    )
}