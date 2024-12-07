import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-4 h-screen max-w-7xl mx-auto">
      {/* LEFT COMPONENT */}
      <div className="col-span-3 p-4">
        <figure className="mb-4">
          <img src="/images/logo.png" alt="logo" width={60} height={60} />
        </figure>
        <div className="uppercase flex flex-col gap-2">
          <div className="hover:shadow-md duration-150 hover:text-black text-gray-500 flex items-center text-lg rounded-lg px-4 py-2 gap-4 bg-white">
            <i className="fa-solid fa-house"></i>
            <p className="text-base font-normal">Feed</p>
          </div>
          <div className="hover:shadow-md duration-150 hover:text-black text-gray-500 flex items-center text-lg rounded-lg px-4 py-2 gap-4 bg-white">
            <i className="fa-solid fa-house"></i>
            <p className="text-base font-normal">Explore</p>
          </div>
          <div className="hover:shadow-md duration-150 hover:text-black text-gray-500 flex items-center text-lg rounded-lg px-4 py-2 gap-4 bg-white">
            <i className="fa-solid fa-house"></i>
            <p className="text-base font-normal">Language</p>
          </div>
          <div className="hover:shadow-md duration-150 hover:text-black text-gray-500 flex items-center text-lg rounded-lg px-4 py-2 gap-4 bg-white">
            <i className="fa-solid fa-house"></i>
            <p className="text-base font-normal">Trending</p>
          </div>
          <div className="hover:shadow-md mt-5 duration-150 justify-center bg-purple-700 flex items-center text-lg rounded-lg py-3 gap-4">
            <p className="text-base font-semibold text-white">Sign in</p>
          </div>
        </div>
      </div>

      {/* MIDDLE COMPONENT */}
      <div className="col-span-6 p-4">
        <div className="flex justify-between items-center uppercase bg-white mb-4 rounded-xl overflow-hidden">
          <div className="text-center w-full py-4 bg-slate-200 duration-150 border-b-2 border-purple-800 cursor-pointer">
            Feed
          </div>
          <div className="text-center w-full py-4 hover:bg-slate-200 duration-150 border-b-2 border-transparent cursor-pointer">
            People
          </div>
          <div className="text-center w-full py-4 hover:bg-slate-200 duration-150 border-b-2 border-transparent cursor-pointer">
            Trending
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Welcome to Vogel!</p>
          <p>Share your thoughts with others and gain a following.</p>
        </div>
      </div>

      {/* RIGHT COMPONENT */}
      <div className="col-span-3 p-4">
        <h3 className="font-bold text-lg mb-4">What's happening</h3>
        <ul>
          <li>#HappyBirthdayJohnSmith</li>
          <li>#SelectricsM12</li>
          <li>#ME11Lite</li>
          <li>News</li>
        </ul>
      </div>
    </main>
  );
}
