import { useState } from "react";
import Todoitem from "./Todoitem";
import TodoForm from "./TodoForm";

function Todo() {

    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleTodo = (e) => {
        const { value } = e.target;
        setTodo(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo('');
    }


    return (
        <div className="w-1/2 m-auto text-center">
            <h1 className="text-4xl font-semibold">Todo App</h1>
            <TodoForm
                onHandleSubmit={handleSubmit}
                handleChange={handleTodo}
                value={todo}
                placeholder={'Add todo here....'}
                inputType = {'text'}
                btnType={'submit'}
                btnLabel={'ADD TODO'}
            />
            {/* End Form */}

            <div className="text-start mt-4">
                {todos?.map((item, index) => (
                    <Todoitem
                        key={index}
                        item={item}
                    />
                ))}
            </div>

        </div>
    );
}

export default Todo;