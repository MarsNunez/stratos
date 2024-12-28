"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <nav className="py-2">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="flex items-center gap-5">
          <Menu as="div" className="relative">
            <MenuButton className="inline-flex items-center gap-2 py-1.5 px-3 font-semibold  shadow-white/10 focus:outline-none">
              <div className="flex items-center">
                <figure>
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    width={45}
                    height={45}
                  />
                </figure>
                <i className="fa-solid fa-chevron-down text-sm"></i>
              </div>
            </MenuButton>

            <MenuItems
              className="absolute z-50 min-w-[15rem] max-w-[20rem] shadow-xl dark:shadow-slate-100 dark:shadow-none dark:border border-slate-800 origin-top bg-white dark:bg-slate-900 dark:text-slate-200 text-black rounded-xl p-1 text-sm/6 transition duration-100 ease-out focus:outline-none"
              style={{
                left: "auto",
                right: "auto",
                transform: "none",
              }}
            >
              <MenuItem>
                <button className="group font-semibold flex w-full items-center gap-2 rounded-lg py-1 px-3 hover:bg-indigo-600 hover:text-white">
                  🏠 Home
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group font-semibold flex w-full items-center gap-2 rounded-lg py-1 px-3 hover:bg-indigo-600 hover:text-white">
                  🌟 Join us
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group font-semibold flex w-full items-center gap-2 rounded-lg py-1 px-3 hover:bg-indigo-600 hover:text-white">
                  🧭 Explore
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group font-semibold flex w-full items-center gap-2 rounded-lg py-1 px-3 hover:bg-indigo-600 hover:text-white">
                  🟢 Login
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group font-semibold flex w-full items-center gap-2 rounded-lg py-1 px-3 hover:bg-indigo-600 hover:text-white">
                  🔴 Logout
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group font-semibold flex w-full items-center gap-2 rounded-lg py-1 px-3 hover:bg-indigo-600 hover:text-white">
                  🫀 About
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-slate-100 dark:bg-slate-800" />
              <MenuItem>
                <button className="group font-semibold flex w-full items-center gap-2 rounded-lg py-1 px-3 hover:bg-indigo-600 hover:text-white">
                  😎 Profile
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group font-semibold flex w-full items-center gap-2 rounded-lg py-1 px-3 hover:bg-indigo-600 hover:text-white">
                  ✅ Saved posts
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group font-semibold flex w-full items-center gap-2 rounded-lg py-1 px-3 hover:bg-indigo-600 hover:text-white">
                  ❤️ Liked posts
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-slate-100 dark:bg-slate-800" />
              <MenuItem>
                <button className="group font-semibold flex w-full items-center gap-2 rounded-lg py-1 px-3 hover:bg-indigo-600 hover:text-white">
                  🔮 Random place
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
          <p onClick={toggleTheme} className="text-xl cursor-pointer px-3 py-1">
            🌓
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p>Login</p>
          <button className="flex items-center bg-indigo-600 text-white gap-1 font-bold rounded-xl px-4 py-2">
            Join us <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
