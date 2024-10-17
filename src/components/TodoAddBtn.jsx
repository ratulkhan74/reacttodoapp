function TodoAddBtn({ btnType, btnLabel }) {
    return (
        <>
            <button
                type={btnType}
                className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-4 rounded-md w-full text-xl transition ease-out delay-150"
            >
                {btnLabel}
            </button>
        </>
    );
}

export default TodoAddBtn;