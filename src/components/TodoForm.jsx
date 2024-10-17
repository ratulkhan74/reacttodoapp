import { useState } from "react";
import TodoAddBtn from "./TodoAddBtn";

function TodoForm({ todos, setTodos }) {
    const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setTodo(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo('');
    }



    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-3 w-full m-auto mt-8">
                <div className="w-[80%]">
                    <input
                        onChange={handleChange}
                        className="border-2 border-blue-600 p-3 rounded-md w-full text-lg focus:border-blue-800 focus:outline-none"
                        type={"text"}
                        value={todo}
                        placeholder={'Add todo here....'} />
                </div>
                <div className="w-[20%]">
                    <TodoAddBtn
                        btnType={'submit'}
                        btnLabel={'ADD TODO'}
                    />
                </div>
            </form>
        </>
    );
}

export default TodoForm;