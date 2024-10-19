import Todoitem from "./Todoitem";
function TodoList({ todos, setTodos }) {

    const sortedTodos = todos.slice().sort((a, b) => Number(a.completed) - Number(b.completed));

    return (
        <>
            {sortedTodos.map((item, index) => (
                <Todoitem
                    key={index}
                    item={item}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </>
    );
}

export default TodoList;