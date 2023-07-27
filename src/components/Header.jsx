import { useContext } from "react";
import {
  TbCircleLetterD,
  TbCircleLetterA,
  TbBrandLetterboxd,
} from "react-icons/tb";
import { ThemeContext } from "../App";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`sticky top-0 ${
        theme === "dark" ? "bg-slate-800" : "bg-slate-500"
      }`}
    >
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-9 py-6 flex flex-col gap-y-3 items-center sm:flex-row sm:justify-between">
        <a href="">
          <div
            className="flex items-center text-base sm:text-lg md:text-xl font-bold mr-1 h-10 text-sky-500"
          >
            <TbBrandLetterboxd className="h-6 w-6" />
            <TbCircleLetterD className="h-6 w-6" />
            <TbCircleLetterA className="h-6 w-6" />
            <TbCircleLetterA className="h-6 w-6" />
            <span className="ml-2">DAA BLOG</span>
          </div>
        </a>
        <nav>
          <ul
            className={`flex gap-x-3 font-medium 
              ${theme === "dark" ? "text-gray-200" : "text-gray-900"}`}
          >
            <li>
              <ThemeButton />
            </li>
            <li className="hover:font-extrabold">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:font-extrabold">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
