const Shimmer = () => {
  return (
    <div data-testid="shimmer-load">
      <div className="px-5 py-1 bg-blue-500 mx-28 flex justify-evenly">
        <input
          type="text"
          className="focus:bg-slate-300 ml-52"
          placeholder="Search"
        />
        <button className="p-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500">
          Search Restro...
        </button>
        <input
          type="text"
          className="focus:bg-slate-300 ml-60"
          placeholder="Location"
        />
        <button className="p-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500">
          Location
        </button>
      </div>
      <div className="flex flex-wrap p-2 m-2 mx-16 justify-center">
        {Array(4)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="w-64 h-80 m-5 p-2 shadow-xl border-solid border-gray-200 border-2"
            >
              <img className="m-2 w-56 h-32 bg-gray-300" />
              <h2 className="m-2 h-5 bg-gray-300"></h2>
              <h3 className="m-2 h-9 w-44 bg-gray-300" />
              <br />
              <h4 className="m-2 h-4 w-44 bg-gray-300" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
