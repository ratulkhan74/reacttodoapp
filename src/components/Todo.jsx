import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {

    const [todos, setTodos] = useState([]);

    return (
        <div className="w-1/2 m-auto text-center">
            <h1 className="text-4xl font-semibold">{"Todo App"}</h1>
            <TodoForm
                todos={todos}
                setTodos={setTodos}
            />
            <div className="text-start mt-4">
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                />
            </div>

        </div>
    );
}

export default Todo;