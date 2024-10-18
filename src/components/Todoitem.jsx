import TodoCompleteBtn from "./TodoCompleteBtn";
import TodoDeleteBtn from "./TodoDeleteBtn";

function Todoitem({ item, todos, setTodos }) {

    // Mark item as complete
    const handleClickComplete = (id) => {

        const updatedTodoItem = todos.map((todo) =>
            todo.name === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodoItem);
    }

    // Delete item from the TODO list
    const handleClick = (id) => {
        let filteredTodo = todos.filter((todo) => todo.name !== id);
        setTodos(filteredTodo);

    }


    return (
        <>
            <div className={`flex items-center justify-between ${item.completed ? 'bg-green-300' : 'bg-gray-200'} rounded-md py-3 px-5 box-border mb-4 last:mb-0`}>
                <h2 className={`text-2xl ${item.completed ? 'line-through' : ''} text-blue-700 font-semibold`}>{item.name}</h2>
                <div className="flex items-center gap-3">
                    <TodoCompleteBtn
                        id={item.name}
                        handleClick={handleClickComplete}
                    />
                    <TodoDeleteBtn
                        id={item.name}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </>
    );
}

export default Todoitem;