function TodoForm({ onHandleSubmit, handleChange, value, placeholder, inputType, btnType, btnLabel }) {
    return (
        <>
            <form
                onSubmit={onHandleSubmit}
                className="flex items-center gap-3 w-full m-auto mt-8">
                <div className="w-[80%]">
                    <input
                        onChange={handleChange}
                        className="border-2 border-blue-600 p-3 rounded-md w-full text-lg focus:border-blue-800 focus:outline-none"
                        type={inputType}
                        value={value}
                        placeholder={placeholder} />
                </div>
                <div className="w-[20%]">
                    <button
                        type={btnType}
                        className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-4 rounded-md w-full text-xl transition ease-out delay-150"
                    >
                        {btnLabel}
                    </button>
                </div>
            </form>
        </>
    );
}

export default TodoForm;