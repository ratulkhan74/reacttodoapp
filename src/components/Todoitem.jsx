import TodoCompleteBtn from "./TodoCompleteBtn";
import TodoDeleteBtn from "./TodoDeleteBtn";

function Todoitem({ item, todos, setTodos }) {

    const handleClick = (id) => {

        let filteredTodo = todos.filter((item) => item !== id);
        setTodos(filteredTodo);

    }

    const handleClickComplete = (id) => {
        console.log("Complete Button Clicked For Item", id);
        setTodos(todos.map(item => item.id === id ? { ...item, completed: true } : item));
    }

    return (
        <>
            <div className="flex items-center justify-between bg-gray-200 rounded-md py-3 px-5 box-border mb-4 last:mb-0">
                <h2 className="text-2xl text-blue-700 font-semibold">{item}</h2>
                <div className="flex items-center gap-3">
                    <TodoCompleteBtn
                        id={item}
                        handleClick={handleClickComplete}
                        completed={completed}
                    />
                    <TodoDeleteBtn
                        id={item}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </>
    );
}

export default Todoitem;