export default function EditTopicForm() {
    return (
        <div className="mt-5">
            <form className="flex flex-col gap-3">
                <input
                    className="border border-slate-500 px-4 py-2 rounded-sm outline-none"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Topic Title"
                />

                <input
                    className="border border-slate-500 px-4 py-2 rounded-sm outline-none"
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Topic description"
                />

                <button
                    className="
                    bg-green-600 font-bold text-white py-3 px-6 tracking-wider rounded-md w-fit
                    hover:bg-green-700 hover:transition-all hover:duration-150 hover:ease-in
                    "
                >
                    Update Topic
                </button>
            </form>
        </div>
    )
}