"use client";
import Navbar from "../components/Navbar";
import { useTheme } from "../ThemeContext";

const MainWrapper = ({ children, geistSans, geistMono }) => {
  //   const { darkMode, toggleTheme } = useTheme();
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} duration-200 antialiased bg-slate-100 dark:bg-slate-900 dark:text-slate-200`}
    >
      <div>
        <Navbar />
        {children}
      </div>
    </body>
  );
};

export default MainWrapper;
