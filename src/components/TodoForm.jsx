import { useState } from "react";

function TodoForm({ todos, setTodos }) {

    const [todo, setTodo] = useState('');
    // const [todo, setTodo] = useState({ name: '', completed: false });

    // const handleChange = (e) => {
    //     setTodo({ name: e.target.value, completed: false });        
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo.trim()) {
            const newTodo = {
                name: todo,
                completed: false
            };

            setTodos([...todos, newTodo]);
            setTodo('');

        }


        // setTodos([...todos, todo.name]);
        // setTodo({ name: '', completed: false });        
    }




    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-3 w-full m-auto mt-8">
                <div className="w-[80%]">
                    <input
                        onChange={(e) => setTodo(e.target.value)}
                        value={todo}
                        className="border-2 border-blue-600 p-3 rounded-md w-full text-lg focus:border-blue-800 focus:outline-none"
                        type="text"
                        placeholder={"Add todo here...."} />
                </div>
                <div className="w-[20%]">
                    <button
                        type={"submit"}
                        className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-4 rounded-md w-full text-xl transition ease-out delay-150"
                    >
                        Add Todo
                    </button>
                </div>
            </form>
        </>
    );
}

export default TodoForm;