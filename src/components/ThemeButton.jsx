import { useContext } from "react";
import { ThemeContext } from "../App";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeButton() {
 const { theme, setTheme } = useContext(ThemeContext);
    return (
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
      </button>
    );
}