function TodoCompleteBtn({ id, handleClick, completed }) {

    return (
        <>
            <button onClick={() => handleClick(id)} className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-md shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
            </button>
        </>
    );
}

export default TodoCompleteBtn;