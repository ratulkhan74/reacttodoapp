import Todoitem from "./Todoitem";
function TodoList({ todos, setTodos }) {
    return (
        <>
            {todos?.map((item, index) => (
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