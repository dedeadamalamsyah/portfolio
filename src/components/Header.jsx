import {
  TbCircleLetterD,
  TbCircleLetterA,
  TbBrandLetterboxd,
} from "react-icons/tb";

export default function Header() {
  return (
    <header className="sticky top-0 right-0 bg-slate-800">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-9 py-6 flex flex-col gap-y-3 items-center sm:flex-row sm:justify-between">
        <a href="">
          <div className="flex items-center text-base sm:text-lg md:text-xl font-bold text-sky-500 mr-1 h-10">
            <TbBrandLetterboxd className="h-6 w-6" />
            <TbCircleLetterD className="h-6 w-6" />
            <TbCircleLetterA className="h-6 w-6" />
            <TbCircleLetterA className="h-6 w-6" />
            <span className="ml-2">DAA BLOG</span>
          </div>
        </a>
        <nav>
          <ul className="flex gap-x-3 font-medium text-gray-200">
            <li className="hover:text-white">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-white">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:text-white">
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
