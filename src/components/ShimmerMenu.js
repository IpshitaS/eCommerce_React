const ShimmerMenu = () => {
    return(
      <>
        <div className="flex p-3 mx-20 bg-blue-700 justify-evenly">
          <img className="h-48 bg-gray-400 w-60" />
          <div className="p-5 m-2">
            <h2 className="bg-gray-300 w-40"></h2>
            <h2 className="m-2 h-5 bg-gray-300 "></h2>
            <h2 className="m-2 h-5 bg-gray-300"></h2>
          </div>
        </div>
        {/* Menu */}
        <div>
           <div className="p-10 m-10">
           {Array(4)
            .fill("")
            .map((e, index) => (
            <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 mx-40">
              <button 
                        onClick={() => setIsVisible(false)}
                        className="justify-between group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]">
                        <span className="m-2 h-5 bg-gray-300"></span>               
                        <span className="text-right rotate-[-180deg]">^</span>           
                    </button>
            </div>
            ))}
           </div>
        </div>
        </>
    )
}

export default ShimmerMenu;