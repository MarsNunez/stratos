const Sidebar = () => {
  return (
    <div className="col-span-3 p-4">
      <div className="uppercase flex flex-col gap-2">
        <div className="hover:shadow-md duration-150 hover:text-black text-gray-500 dark:text-slate-300 dark:hover:text-indigo-600 dark:hover:bg-indigo-950 dark:bg-indigo-900 flex items-center text-lg rounded-lg px-4 py-2 gap-4 bg-white">
          <i className="fa-solid fa-house"></i>
          <p className="text-base font-normal">Feed</p>
        </div>
        <div className="hover:shadow-md duration-150 hover:text-black text-gray-500 dark:text-slate-300 dark:bg-slate-800 dark:hover:text-indigo-600 dark:hover:bg-indigo-950 flex items-center text-lg rounded-lg px-4 py-2 gap-4 bg-white">
          <i className="fa-solid fa-house"></i>
          <p className="text-base font-normal">Explore</p>
        </div>
        <div className="hover:shadow-md duration-150 hover:text-black text-gray-500 dark:text-slate-300 dark:bg-slate-800 dark:hover:text-indigo-600 dark:hover:bg-indigo-950 flex items-center text-lg rounded-lg px-4 py-2 gap-4 bg-white">
          <i className="fa-solid fa-house"></i>
          <p className="text-base font-normal">Language</p>
        </div>
        <div className="hover:shadow-md duration-150 hover:text-black text-gray-500 dark:text-slate-300 dark:bg-slate-800 dark:hover:text-indigo-600 dark:hover:bg-indigo-950 flex items-center text-lg rounded-lg px-4 py-2 gap-4 bg-white">
          <i className="fa-solid fa-house"></i>
          <p className="text-base font-normal">Trending</p>
        </div>
        <div className="hover:shadow-md mt-5 duration-150 justify-center bg-indigo-600 flex items-center text-lg rounded-lg py-3 gap-4">
          <p className="text-base font-semibold text-white">Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
