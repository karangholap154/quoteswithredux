
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { QuoteWithId } from "./pages/QuoteWithId";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme === "light" ? "bg-white text-black" : "bg-gray-950 text-white"}>
      <Router>
        <header className="flex justify-around p-4">
          <h1 className="text-xl font-bold">Quotes App</h1>
          <button onClick={toggleTheme} className="bg-gray-500 text-white px-4 py-2 rounded">
            Toggle Theme
          </button>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote-id" element={<QuoteWithId />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;










