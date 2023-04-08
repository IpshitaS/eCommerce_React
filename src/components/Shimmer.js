const Shimmer = () => {
    return (
        <>
        <div className="p-5 bg-green-200 m-5">
            <input
              type="text"
              className="focus:bg-slate-300"
              placeholder="Search"
            />
            <button className="p-2 bg-red-300 text-white rounded-xl hover:bg-gray-500">
                Search
            </button>
        </div>
        <div className="flex flex-wrap p-2 m-2">
            {Array(10)
            .fill("")
            .map((e, index) => (
                <div key ={index} className="w-54 h-80 p-2 m-3 shadow-xl border-solid border-gray-200 border-2">
                    <img className="m-2 w-44 h-32 bg-gray-300" />
                    <h2 className="m-2 h-5 bg-gray-300" ></h2>
                    <h3 className="m-2 h-9 w-44 bg-gray-300" /><br/>
                    <h4 className="m-2 h-4 w-44 bg-gray-300" />
                </div>
            ))}
        </div>
        </>
    );
};

export default Shimmer;