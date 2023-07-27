import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { createContext} from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState("dark");
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={
          theme === "dark"
            ? "bg-slate-900 text-gray-100"
            : "bg-slate-600 text-gray-900"
        }
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
