import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {

    const [todos, setTodos] = useState([]);

    const totalTodos = todos.length;

    const completedTodoCount = todos.filter((todo) => todo.completed).length;

    const leftTodos = totalTodos - completedTodoCount;


    return (
        <div className="w-1/2 m-auto text-center">
            <h1 className="text-4xl font-semibold">{"Todo App"}</h1>
            {totalTodos > 0 && (
                <ul className="flex items-center justify-center gap-3 mt-4 text-xl bg-slate-200 rounded-lg px-3 py-2 box-border">
                    <li>Total Todos: <span className="font-bold text-2xl">{totalTodos}</span></li>
                    <li>Comploeted Todos: <span className="font-bold text-2xl">{completedTodoCount}</span></li>
                    <li>Left Todos: <span className="font-bold text-2xl">{leftTodos}</span></li>
                </ul>
            )}
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